from django.db import models
from django.contrib.auth.models import User





class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brewery_id = models.CharField(max_length=255)
    is_favorite = models.BooleanField(default=False)
    
