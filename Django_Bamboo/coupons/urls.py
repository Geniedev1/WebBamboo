from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CouponViewSet, ApplyCouponViewSet

router = DefaultRouter()
router.register(r'coupons', CouponViewSet, basename='coupons')
router.register(r'apply', ApplyCouponViewSet, basename='apply_coupon')

urlpatterns = [
    path('', include(router.urls)),
]
