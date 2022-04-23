
import re
from urllib import response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Beer_type, Beer
from .serializers import BeerTypeSerializer, BeerSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def get_brewery_tags(request):
    data = request.data
    serializer = BeerSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    instance = serializer.save(user=request.user)
    return Response(BeerSerializer(instance=instance).data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([AllowAny])
def brewery_tags(request, brewery_id=None):
    beer = get_object_or_404(Beer, pk=brewery_id)
    serializer = BeerSerializer(beer)
    return Response(serializer.data, status=status.HTTP_200_OK)