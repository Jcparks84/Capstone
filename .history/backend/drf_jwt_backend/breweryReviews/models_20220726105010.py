from django.db import models

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    brewery = models.F

# Create your models here.
