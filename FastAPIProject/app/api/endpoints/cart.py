# app/api/endpoints/cart.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.cart import CartOut
from app.core.dependencies import get_db
from app.services import cart_service

router = APIRouter()

@router.post("/add", response_model=CartOut)
def add_product_to_cart(user_email: str, product_id: int, quantity: int, db: Session = Depends(get_db)):
    try:
        cart = cart_service.add_product_to_cart(db, user_email, product_id, quantity)
        return cart
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/", response_model=CartOut)
def get_cart(user_email: str, db: Session = Depends(get_db)):
    cart = cart_service.get_cart_by_user_email(db, user_email)
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    return cart

@router.delete("/remove", response_model=dict)
def remove_product_from_cart(user_email: str, product_id: int, db: Session = Depends(get_db)):
    try:
        cart_service.remove_product_from_cart(db, user_email, product_id)
        return {"detail": "Product removed from cart"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
