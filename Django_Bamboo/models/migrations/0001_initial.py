# Generated by Django 5.1.7 on 2025-03-21 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SimpleModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Nhập tên đối tượng', max_length=100)),
                ('description', models.TextField(blank=True, help_text='Mô tả đối tượng (tùy chọn)', null=True)),
            ],
        ),
    ]
