from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CartView, AddCartItemView, OrderViewSet, ShippingInfoView

router = DefaultRouter()
router.register(r'orders', OrderViewSet, basename='orders')

urlpatterns = [
    path('cart/', CartView.as_view(), name='cart'),
    path('cart/add/', AddCartItemView.as_view(), name='add_cart_item'),
    path('shipping/', ShippingInfoView.as_view(), name='shipping_info'),
    path('', include(router.urls)),
]
