from django.db import models
from django.core.validators import MaxValueValidator, MinLengthValidator
from django.contrib.auth.models import User

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brewery_id = models.CharField(max_length=255)
    score = models.IntegerField(default=0,
        validators=[
            MaxValueValidator(5),
            MinLengthValidator(0),
        ]
    )

    def __str__(self):
        return str(self.pk)
