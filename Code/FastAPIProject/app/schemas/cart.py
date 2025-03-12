# app/schemas/cart.py
from pydantic import BaseModel
from typing import List

class CartItemBase(BaseModel):
    product_id: int
    quantity: int

class CartItemOut(CartItemBase):
    id: int
    amount: int

    class Config:
        orm_mode = True

class CartBase(BaseModel):
    total_amount: int

class CartOut(CartBase):
    id: int
    items: List[CartItemOut] = []

    class Config:
        orm_mode = True
