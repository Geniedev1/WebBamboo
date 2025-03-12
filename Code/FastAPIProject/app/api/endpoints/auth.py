# app/api/endpoints/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserOut, Token
from app.services import auth_service
from app.core.dependencies import get_db

router = APIRouter()

@router.post("/singup", response_model=UserOut)
def register(user: UserCreate, db: Session = Depends(get_db)):
    return auth_service.register_user(db, user)

@router.post("/singin", response_model=Token)
def login(user: UserCreate, db: Session = Depends(get_db)):
    token = auth_service.authenticate_user(db, user.email, user.password)
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    return token
