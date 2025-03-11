# app/api/endpoints/products.py
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from app.schemas.product import ProductCreate, ProductOut
from app.core.dependencies import get_db
from app.services import product_service

router = APIRouter()

@router.post("/", response_model=ProductOut)
async def create_product(
    product_name: str,
    description: str,
    price: float,
    weight: float,
    img: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    image_bytes = await img.read()
    product_data = ProductCreate(
        product_name=product_name,
        description=description,
        price=price,
        weight=weight,
        img=image_bytes
    )
    return product_service.create_product(db, product_data)

@router.get("/{product_id}", response_model=ProductOut)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = product_service.get_product(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.get("/", response_model=list[ProductOut])
def get_all_products(db: Session = Depends(get_db)):
    return product_service.get_all_products(db)

@router.put("/{product_id}", response_model=ProductOut)
async def update_product(
    product_id: int,
    product_name: str,
    description: str,
    price: float,
    weight: float,
    img: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    image_bytes = await img.read()
    product_data = ProductCreate(
        product_name=product_name,
        description=description,
        price=price,
        weight=weight,
        img=image_bytes
    )
    return product_service.update_product(db, product_id, product_data)

@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    product_service.delete_product(db, product_id)
    return {"detail": "Product deleted"}
