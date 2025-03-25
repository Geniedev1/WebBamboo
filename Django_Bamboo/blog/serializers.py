from rest_framework import serializers
from .models import Post, Comment, Like, Share
from products.models import Product

# Hiển thị thông tin sản phẩm đơn giản
class ProductInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'image_url', 'price']

class PostSerializer(serializers.ModelSerializer):
    author_username = serializers.CharField(source='author.username', read_only=True)
    product = ProductInfoSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product',
        write_only=True
    )
    comments = serializers.StringRelatedField(many=True, read_only=True)
    likes = serializers.StringRelatedField(many=True, read_only=True)
    shares = serializers.StringRelatedField(many=True, read_only=True)

    # Trường đếm
    like_count = serializers.SerializerMethodField()
    share_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'content', 'author', 'author_username',
            'product', 'product_id',
            'created_at', 'updated_at',
            'comments', 'likes', 'shares',
            'like_count', 'share_count',
        ]

    # ⬇️ Các phương thức phải nằm bên trong class!
    def get_like_count(self, obj):
        return obj.likes.count()

    def get_share_count(self, obj):
        return obj.shares.count()

class CommentSerializer(serializers.ModelSerializer):
    user_username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'post', 'user', 'user_username', 'content', 'created_at']

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'post', 'user', 'created_at']

class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Share
        fields = ['id', 'post', 'user', 'shared_at']
