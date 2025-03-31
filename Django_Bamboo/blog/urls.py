from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet, LikeViewSet, ShareViewSet,AllPostViewSet

# Router cho comment, like, share (post không dùng router nữa)
router = DefaultRouter()
router.register(r'comments', CommentViewSet, basename='comment')
router.register(r'likes', LikeViewSet, basename='like')
router.register(r'shares', ShareViewSet, basename='share')
router.register(r'all-posts', AllPostViewSet, basename='all-posts')


# Tạo view xử lý post theo product_id (GET và POST)
post_create = PostViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

urlpatterns = [
    path('', include(router.urls)),

    # ✅ Tạo bài viết gắn với 1 sản phẩm
    path('products/<int:product_id>/posts/', post_create, name='product-posts'),
]
