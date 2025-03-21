from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    description = models.TextField(blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    image_url2 = models.URLField(max_length=500, blank=True, null=True)
    categories = models.ManyToManyField(Category, related_name='products')
    def __str__(self):
        return self.name
