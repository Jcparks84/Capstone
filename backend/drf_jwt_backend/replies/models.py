from operator import mod
from django.db import models
from django.contrib.auth.models import User
from comments.models import Comment


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.SET_NULL, null=True)
    text = models.CharField(max_length=255)