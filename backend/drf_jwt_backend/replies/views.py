from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Reply
from .serializers import ReplySerializer



@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(request, comment):
    replies = Reply.objects.filter( comment=comment)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def user_reply(request, comment):
    print(request)
    print(
        'User ', f"{request.user.id} {request.user.username} {request.user}")

    replies = Reply.objects.filter(user=request.user)
    # replies = Reply.objects.filter(comment=comment)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def create_reply(request):
    serializer = ReplySerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)