from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/accounts/', include('accounts.urls')),
    path('api/products/', include('products.urls')),
    path('api/coupons/', include('coupons.urls')),
    path('api/orders/', include('orders.urls')),
    path('api/payments/', include('payments.urls')),
    path('api/reviews/', include('reviews.urls')),
    path('api/inventory/', include('inventory.urls')),
    path('api/wishlist/', include('wishlist.urls')),
    path('api/blog/', include('blog.urls')),
    path('api/', include('contact.urls')),
]
