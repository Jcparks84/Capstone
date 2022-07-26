from django.db import models

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    brewer

# Create your models here.
