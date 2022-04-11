
import re
from urllib import response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Beer_type, Beer
from .serializers import BeerTypeSerializer, BeerSerializer

@api_view({'GET', 'POST'})
@permission_classes([IsAuthenticated])
def get_brewery_tags(request, brewery_id):
    if request.method == 'GET':
        beer = Beer.objects.filter(user_id=request.user.id)
        serializer = BeerTypeSerializer(beer, many=True)
        return response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = BeerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
