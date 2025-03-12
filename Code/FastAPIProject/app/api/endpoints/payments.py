# app/api/endpoints/payments.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.dependencies import get_db
from app.services import payment_service

router = APIRouter()

@router.post("/create")
def create_payment(amount: float, db: Session = Depends(get_db)):
    try:
        payment_details = payment_service.create_order(amount)
        return payment_details
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
