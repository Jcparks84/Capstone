from django.db import models

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    brewery = models.ForeignKey(brewery, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    rate = rate

# Create your models here.
