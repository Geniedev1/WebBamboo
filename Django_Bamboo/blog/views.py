from rest_framework import viewsets
from .models import Post, Comment, Like, Share
from .serializers import PostSerializer, CommentSerializer, LikeSerializer, ShareSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().order_by('-created_at')
    serializer_class = CommentSerializer

class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all().order_by('-created_at')
    serializer_class = LikeSerializer

class ShareViewSet(viewsets.ModelViewSet):
    queryset = Share.objects.all().order_by('-shared_at')
    serializer_class = ShareSerializer
