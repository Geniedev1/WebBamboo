from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Payment
from .serializers import PaymentSerializer
from orders.models import Order

class PaymentProcessView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializer

    def post(self, request, *args, **kwargs):
        order_id = request.data.get('order')
        order = get_object_or_404(Order, id=order_id, user=request.user)
        payment_method = request.data.get('payment_method', 'COD')
        # Ở đây bạn có thể tích hợp API của cổng thanh toán (PayPal, VNPay, MoMo, v.v.)
        # Giả sử thanh toán thành công:
        payment = Payment.objects.create(
            order=order,
            payment_method=payment_method,
            amount=order.total_amount,
            status='COMPLETED'
        )
        serializer = self.get_serializer(payment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
