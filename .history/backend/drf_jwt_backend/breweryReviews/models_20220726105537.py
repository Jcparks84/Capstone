from django.db import models

RATE_CHOICES = [
    (1, '1-bad')
    (2, '2-ok')
    (3, '3-average')
    (4, '4-good')
    (5, '5-very good')
]

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    brewery = models.ForeignKey(brewery, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    text = models.TextField(max_length=1000, blank=tru)
    rate =

# Create your models here.
