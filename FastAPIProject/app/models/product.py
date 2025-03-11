# app/models/product.py
from sqlalchemy import Column, Integer, String, Float, LargeBinary
from app.database.session import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    product_name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)
    weight = Column(Float)
    img = Column(LargeBinary)  # Lưu ảnh dưới dạng byte (nén)
