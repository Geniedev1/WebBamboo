# app/services/cart_service.py
from sqlalchemy.orm import Session
from app.models.user import User
from app.models.cart import Cart, CartItem
from app.models.product import Product

def add_product_to_cart(db: Session, user_email: str, product_id: int, quantity: int):
    user = db.query(User).filter(User.email == user_email).first()
    if not user:
        raise Exception("User not found")
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise Exception("Product not found")
    cart = user.cart
    if not cart:
        cart = Cart(user_id=user.id, total_amount=0)
        db.add(cart)
        db.commit()
        db.refresh(cart)
    cart_item = None
    for item in cart.items:
        if item.product_id == product_id:
            cart_item = item
            break
    if cart_item:
        cart_item.quantity += quantity
        cart_item.amount = int(cart_item.quantity * product.price)
    else:
        new_item = CartItem(
            product_id=product_id,
            quantity=quantity,
            amount=int(quantity * product.price),
            cart_id=cart.id
        )
        db.add(new_item)
    db.commit()
    db.refresh(cart)
    total = sum([item.amount for item in cart.items])
    cart.total_amount = total
    db.commit()
    db.refresh(cart)
    return cart

def get_cart_by_user_email(db: Session, user_email: str):
    user = db.query(User).filter(User.email == user_email).first()
    if not user or not user.cart:
        return None
    return user.cart

def remove_product_from_cart(db: Session, user_email: str, product_id: int):
    user = db.query(User).filter(User.email == user_email).first()
    if not user or not user.cart:
        raise Exception("Cart not found")
    cart = user.cart
    cart_item = None
    for item in cart.items:
        if item.product_id == product_id:
            cart_item = item
            break
    if not cart_item:
        raise Exception("Product not in cart")
    db.delete(cart_item)
    db.commit()
    total = sum([item.amount for item in cart.items])
    cart.total_amount = total
    db.commit()
