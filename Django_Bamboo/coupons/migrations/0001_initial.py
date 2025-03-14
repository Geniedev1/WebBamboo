# Generated by Django 3.2.25 on 2025-03-12 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coupon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=50, unique=True)),
                ('discount_type', models.CharField(default='percent', max_length=20)),
                ('discount_value', models.DecimalField(decimal_places=2, max_digits=10)),
                ('active', models.BooleanField(default=True)),
                ('valid_from', models.DateTimeField()),
                ('valid_to', models.DateTimeField()),
            ],
        ),
    ]
