# from django.shortcuts import render
# from .models import Rating

# def main_view(request):
#     obj = Rating.objects.filter(score=0).order_by('?').first()
#     context = {
#         'object': obj
#     }
#     return render(request, '', context)

from rest_framework import viewsets

from ratings.serializers import RatingSerializer
from ratings.models import Rating

class RatingViewSet (viewsets.ModelViewSet) :
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer