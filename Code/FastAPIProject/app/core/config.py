# app/core/config.py
import os
from dotenv import load_dotenv

load_dotenv()  # Tải biến môi trường từ file .env

class Settings:
    PROJECT_NAME: str = os.getenv("PROJECT_NAME", "Organica FastAPI")
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./test.db")
    JWT_SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "your_secret_key")
    JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "1440"))

settings = Settings()
