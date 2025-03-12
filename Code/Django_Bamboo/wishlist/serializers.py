from rest_framework import serializers
from .models import Wishlist
from products.serializers import ProductSerializer

class WishlistSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Wishlist
        fields = '__all__'
