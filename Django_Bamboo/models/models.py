from django.db import models

class SimpleModel(models.Model):
    name = models.CharField(max_length=100, help_text="Nhập tên đối tượng")
    description = models.TextField(blank=True, null=True, help_text="Mô tả đối tượng (tùy chọn)")

    def __str__(self):
        return self.name