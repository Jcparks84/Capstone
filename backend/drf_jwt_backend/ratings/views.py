from rest_framework import viewsets
from ratings.serializers import RatingSerializer
from ratings.models import Rating

class RatingViewSet (viewsets.ModelViewSet) :
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer