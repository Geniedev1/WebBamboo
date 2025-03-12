# app/database/init_db.py
from app.database.session import engine, Base
from app.models import user,cart,order,product

def init_db():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init_db()
