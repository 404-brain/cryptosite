from django.db import models
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class AllCoinInfo(models.Model):
    name = models.CharField(max_length=20)
    symbol = models.CharField(max_length=5)
    image = models.FileField()

    def __str__(self):
        return self.name



