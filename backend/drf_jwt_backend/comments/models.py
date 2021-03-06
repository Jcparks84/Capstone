from django.db import models
from django.contrib.auth.models import User





class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brewery_id = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)