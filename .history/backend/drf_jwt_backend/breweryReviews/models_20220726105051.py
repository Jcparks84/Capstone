from django.db import models

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    brewery = models.ForeignKey(brewery, on_delete=models.CASCADE)
    date = model

# Create your models here.
