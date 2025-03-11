import zlib
import base64
from sqlalchemy.orm import Session
from app.models.product import Product
from app.schemas.product import ProductCreate

def compress_bytes(data: bytes) -> bytes:
    """Nén dữ liệu ảnh dùng zlib."""
    return zlib.compress(data)

def decompress_bytes(data: bytes) -> bytes:
    """Giải nén dữ liệu ảnh đã được nén.
       Nếu gặp lỗi, trả về dữ liệu gốc."""
    try:
        return zlib.decompress(data)
    except zlib.error:
        return data

def encode_image(data: bytes) -> str:
    """Chuyển đổi dữ liệu ảnh (bytes) thành chuỗi base64."""
    return base64.b64encode(data).decode('utf-8')

def create_product(db: Session, product_data: ProductCreate) -> Product:
    """Tạo sản phẩm mới:
       - Nén dữ liệu ảnh trước khi lưu vào database.
       - Sau khi lưu, giải nén và chuyển sang base64 để trả về cho client.
    """
    new_product = Product(
        product_name=product_data.product_name,
        description=product_data.description,
        price=product_data.price,
        weight=product_data.weight,
        img=compress_bytes(product_data.img)
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    # Giải nén và chuyển đổi ảnh thành base64 để trả về
    new_product.img = encode_image(decompress_bytes(new_product.img))
    return new_product

def get_product(db: Session, product_id: int):
    """Lấy sản phẩm theo ID và chuyển dữ liệu ảnh thành base64."""
    product = db.query(Product).filter(Product.id == product_id).first()
    if product:
        product.img = encode_image(decompress_bytes(product.img))
    return product

def get_all_products(db: Session):
    """Lấy danh sách tất cả sản phẩm và chuyển dữ liệu ảnh thành base64."""
    products = db.query(Product).all()
    for product in products:
        product.img = encode_image(decompress_bytes(product.img))
    return products

def update_product(db: Session, product_id: int, product_data: ProductCreate):
    """Cập nhật thông tin sản phẩm:
       - Cập nhật lại dữ liệu và nén ảnh trước khi lưu.
       - Sau khi commit, giải nén và chuyển ảnh sang base64 để trả về.
    """
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise Exception("Product not found")
    product.product_name = product_data.product_name
    product.description = product_data.description
    product.price = product_data.price
    product.weight = product_data.weight
    product.img = compress_bytes(product_data.img)
    db.commit()
    db.refresh(product)
    product.img = encode_image(decompress_bytes(product.img))
    return product

def delete_product(db: Session, product_id: int):
    """Xóa sản phẩm theo ID."""
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise Exception("Product not found")
    db.delete(product)
    db.commit()
