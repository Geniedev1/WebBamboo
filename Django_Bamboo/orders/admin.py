from django.contrib import admin

from .models import Order, OrderItem, CartItem, ShippingInfo,Cart
from django.contrib import admin

admin.site.site_header = "Hệ thống quản lý BamBoo"
admin.site.site_title = "Trang quản trị"
admin.site.index_title = "Bảng điều khiển quản trị"

admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(ShippingInfo)