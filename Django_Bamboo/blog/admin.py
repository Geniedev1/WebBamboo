from django.contrib import admin

from .models import Post, Share,Like,Comment

admin.site.register(Post)
admin.site.register(Share)
admin.site.register(Like)
admin.site.register(Comment)