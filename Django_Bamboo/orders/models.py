from django.db import models
from django.conf import settings
from products.models import Product

class Cart(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart của {self.user.username}"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(decimal_places=2, max_digits=10)
    status = models.CharField(max_length=50, default='PENDING')

    def __str__(self):
        return f"Order {self.id} của {self.user.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=10)  # Lưu giá tại thời điểm đặt hàng

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"

class ShippingInfo(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    shipping_method = models.CharField(max_length=100)
    tracking_number = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"Shipping cho Order {self.order.id}"
