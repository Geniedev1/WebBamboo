import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'your-secret-key'
DEBUG = True
ALLOWED_HOSTS = []

INSTALLED_APPS = [
    # Django apps
    'grappelli',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    #FE acress
      'corsheaders',
    # Third-party
    'rest_framework',
    'rest_framework_simplejwt',

    # Local apps
    'accounts',
    'products',
    'coupons',
    'orders',
    'payments',
    'reviews',
    'inventory',
    'wishlist',
    'models',
    'blog',
    'contact',
]

MIDDLEWARE = [
#FE acress
     'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]

ROOT_URLCONF = 'organica_django.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],  # <<< Quan trọng
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'organica_django.wsgi.application'

DATABASES = {
'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Oraganica2',      # Ví dụ: 'organica_db'
        'USER': 'postgres',             # Ví dụ: 'organica_user'
        'PASSWORD': '123456',       # Ví dụ: 'password123'
        'HOST': 'localhost',                # Hoặc địa chỉ IP của server PostgreSQL
        'PORT': '5432',                     # Cổng mặc định của PostgreSQL
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
]

LANGUAGE_CODE = 'vi'
TIME_ZONE = 'Asia/Ho_Chi_Minh'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'

# Django REST Framework config
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
CORS_ALLOW_ALL_ORIGINS = True  # Cho phép tất cả frontend kết nối
CORS_ALLOW_CREDENTIALS = True
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'minhhoi0606@gmail.com'
EMAIL_HOST_PASSWORD = 'msxq ogiz pift wggb'  # dùng app password, không dùng mật khẩu thường
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
ADMIN_EMAIL = 'minhhoi0606@gmail.com' # nơi sẽ nhận email