from django.urls import path
from .views import PaymentProcessView

urlpatterns = [
    path('process/', PaymentProcessView.as_view(), name='process_payment'),
]
