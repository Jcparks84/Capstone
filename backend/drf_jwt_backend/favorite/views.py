from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_list_or_404
from .models import Favorite
from .serializers import FavoriteSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def favorite_brewery(request):
    favorite = Favorite.objects.filter()
    serializer = FavoriteSerializer(favorite, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_Favortie(request, brewery_id):
    print('User === ', f"{request.user}")
    if request.method == 'POST':
        serializer = FavoriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        favorite = Favorite.objects.filter(brewery_id=brewery_id)
        serializer = FavoriteSerializer(favorite, many=True)
        return Response(serializer.data)

        