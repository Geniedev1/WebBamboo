from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Wishlist
from .serializers import WishlistSerializer

class WishlistView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = WishlistSerializer

    def get_object(self):
        wishlist, created = Wishlist.objects.get_or_create(user=self.request.user)
        return wishlist

class AddToWishlistView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = WishlistSerializer

    def post(self, request, *args, **kwargs):
        wishlist, _ = Wishlist.objects.get_or_create(user=request.user)
        product_id = request.data.get('product')
        wishlist.products.add(product_id)
        wishlist.save()
        serializer = self.get_serializer(wishlist)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RemoveFromWishlistView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = WishlistSerializer

    def post(self, request, *args, **kwargs):
        wishlist = get_object_or_404(Wishlist, user=request.user)
        product_id = request.data.get('product')
        wishlist.products.remove(product_id)
        wishlist.save()
        serializer = self.get_serializer(wishlist)
        return Response(serializer.data, status=status.HTTP_200_OK)
