# app/services/payment_service.py
import uuid

def create_order(amount: float):
    order_id = str(uuid.uuid4())
    return {
        "order_id": order_id,
        "amount": int(amount * 100),  # chuyển đổi sang đơn vị nhỏ (ví dụ paise)
        "currency": "INR",
        "key": "your_razorpay_key"  # lấy từ config nếu cần
    }
