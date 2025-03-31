from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

@api_view(['POST'])
def contact_message(request):
    name = request.data.get('name')
    email = request.data.get('email')
    subject = request.data.get('subject')
    message = request.data.get('message')

    full_message = f"""
    Bạn nhận được một tin nhắn từ người dùng:

    Họ tên: {name}
    Email: {email}
    Chủ đề: {subject}

    Nội dung:
    {message}
    """

    try:
        send_mail(
            subject=f"[LIÊN HỆ] {subject}",
            message=full_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=False,
        )
        return Response({"success": "Email đã được gửi thành công!"})
    except Exception as e:
        return Response({"error": str(e)}, status=500)
