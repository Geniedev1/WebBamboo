from django.contrib import admin
from .models import  Order, OrderItem, ShippingInfo, Cart, CartItem

admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingInfo)
