from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from products.models import Product
from .models import Post, Comment, Like, Share
from .serializers import PostSerializer, CommentSerializer, LikeSerializer, ShareSerializer
class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        product_id = self.kwargs.get("product_id")
        return Post.objects.filter(product_id=product_id).order_by('-created_at')

    def perform_create(self, serializer):
        product_id = self.kwargs.get("product_id")
        product = Product.objects.get(id=product_id)
        serializer.save(author=self.request.user, product=product)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().order_by('-created_at')
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # ✅ tự gán user
class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all().order_by('-created_at')
    serializer_class = LikeSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # ✅ tự gán user

class ShareViewSet(viewsets.ModelViewSet):
    queryset = Share.objects.all().order_by('-shared_at')
    serializer_class = ShareSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # ✅ tự gán user
class AllPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    permission_classes = [AllowAny]  # Có thể xem không cần đăng nhập
