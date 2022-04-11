
import re
from urllib import response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Beer_type, Beer
from .serializers import BeerTypeSerializer, BeerSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_brewery_tags(request, brewery_id):
    beer = Beer.objects.filter(id=brewery_id)
    serializer = BeerTypeSerializer(beer, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def brewery_tags(request, brewery_id):
    if request.method == 'GET':
        print(brewery_id)
        beer = get_object_or_404(Beer, pk=brewery_id)
        serializer = BeerSerializer(beer)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = BeerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)