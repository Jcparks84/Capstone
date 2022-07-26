from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager

class Beer_type(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"{self.name}"

class Beer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    beer_text = models.CharField(max_length=255)
    beer_count = models.IntegerField(default=0)
    beer_types = models.ManyToManyField(Beer_type)

    def __str__(self) -> str:
        return f'{self.beer_text}'

