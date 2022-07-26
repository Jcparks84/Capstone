from django.db import models

RATE_CHOICES = [
    (1, '1-bad')
    (2, '2-ok')
    (3, '3-average')
    (1, '1-bad')
    (1, '1-bad')
]

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    brewery = models.ForeignKey(brewery, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    rate =

# Create your models here.
