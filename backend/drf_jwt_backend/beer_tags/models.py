from django.db import models
from django.contrib.auth.models import User
from taggit.managers import taggablemanager

class Beer_tags(models.Model):
    beer_type = models.CharField(max_length=250)
    slug = models.SlugField(uniqe=True, max_length=100)
    tags = taggablemanager()

def _str_(self):
    return self.beer_type

