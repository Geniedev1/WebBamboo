from rest_framework import generics, status, viewsets
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from .models import Cart, CartItem, Order, OrderItem, ShippingInfo
from .serializers import (
    CartSerializer, CartItemSerializer,
    OrderSerializer, ShippingInfoSerializer
)

# Lấy giỏ hàng của người dùng
class CartView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CartSerializer

    def get_object(self):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart

# Thêm sản phẩm vào giỏ
class AddCartItemView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CartItemSerializer

    def post(self, request, *args, **kwargs):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        product_id = request.data.get('product')
        quantity = request.data.get('quantity', 1)
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart, product_id=product_id,
            defaults={'quantity': quantity}
        )
        if not created:
            cart_item.quantity += int(quantity)
            cart_item.save()
        return Response(CartSerializer(cart).data, status=status.HTTP_201_CREATED)

# Tạo, xem, cập nhật Order
class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        cart = get_object_or_404(Cart, user=request.user)
        cart_items = cart.items.all()
        if not cart_items:
            return Response({"detail": "Giỏ hàng trống."}, status=status.HTTP_400_BAD_REQUEST)

        total_amount = sum(item.product.price * item.quantity for item in cart_items)
        order = Order.objects.create(user=request.user, total_amount=total_amount)

        for item in cart_items:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )
        # Xóa giỏ hàng sau khi tạo đơn
        cart.items.all().delete()

        serializer = self.get_serializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

# Nhập thông tin vận chuyển cho Order
class ShippingInfoView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ShippingInfoSerializer

    def post(self, request, *args, **kwargs):
        order_id = request.data.get('order')
        order = get_object_or_404(Order, id=order_id, user=request.user)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(order=order)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
