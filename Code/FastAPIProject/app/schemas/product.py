# app/schemas/product.py
from pydantic import BaseModel

class ProductBase(BaseModel):
    product_name: str
    description: str | None = None
    price: float
    weight: float | None = None

class ProductCreate(ProductBase):
    img: bytes  # Dữ liệu ảnh (dạng byte)

class ProductOut(ProductBase):
    id: int
    img: bytes | None = None

    class Config:
        orm_mode = True
