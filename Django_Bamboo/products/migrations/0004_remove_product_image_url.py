# Generated by Django 5.1.7 on 2025-03-21 14:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_rename_imge_url2_product_image_url2'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image_url',
        ),
    ]
