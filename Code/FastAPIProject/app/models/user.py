# app/models/user.py
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.database.session import Base
from enum import Enum


# Enum cho role (thay cho TotalRoles.java)
class RoleEnum(str, Enum):
    ADMIN = "ADMIN"
    USER = "USER"


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, default=RoleEnum.USER.value)

    # Quan hệ 1-1 với giỏ hàng
    cart = relationship("Cart", back_populates="user", uselist=False)
