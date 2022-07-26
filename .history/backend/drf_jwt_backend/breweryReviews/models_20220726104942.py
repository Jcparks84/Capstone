from django.db import models

class breweryReviews(models.Model):
    user = models.ForeignKey(user, on_delete=models)

# Create your models here.
