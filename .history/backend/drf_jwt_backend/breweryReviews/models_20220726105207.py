from django.db import models

RATE_CHOICES = 

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    brewery = models.ForeignKey(brewery, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    rate =

# Create your models here.
