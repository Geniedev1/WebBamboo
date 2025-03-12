from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.utils import timezone
from .models import Coupon
from .serializers import CouponSerializer

class CouponViewSet(viewsets.ModelViewSet):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        # Tùy chỉnh logic thêm coupon
        return super().create(request, *args, **kwargs)

class ApplyCouponViewSet(viewsets.ViewSet):
    """
    API để người dùng áp mã giảm giá vào đơn hàng (hoặc giỏ hàng).
    """
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request):
        code = request.data.get('code')
        try:
            coupon = Coupon.objects.get(code=code, active=True)
        except Coupon.DoesNotExist:
            return Response({"detail": "Coupon không hợp lệ."}, status=status.HTTP_400_BAD_REQUEST)

        now = timezone.now()
        if not (coupon.valid_from <= now <= coupon.valid_to):
            return Response({"detail": "Coupon đã hết hạn hoặc chưa bắt đầu."}, status=status.HTTP_400_BAD_REQUEST)

        # Tại đây bạn có thể xử lý áp coupon cho đơn hàng hoặc giỏ hàng
        # Ví dụ: Tính giá trị giảm, trả về thông tin giảm giá
        return Response({"detail": f"Áp coupon {code} thành công!"})
