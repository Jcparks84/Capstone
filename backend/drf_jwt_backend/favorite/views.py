from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_list_or_404
from .models import Favorite
from .serializers import FavoriteSerializer


@api_view(['GET', 'POST'])
def favorite_brewery(request, brewery_id):
    favorite = Favorite.objects.filter(brewery_id=brewery_id)
    serializer = FavoriteSerializer(favorite, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)