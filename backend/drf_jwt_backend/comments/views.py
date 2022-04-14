from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Comment
from .serializers import CommentsSerializer



@api_view(['GET'])
@permission_classes([AllowAny])
def get_brewery_comments(request, brewery_id):
    comments = Comment.objects.filter(brewery_id=brewery_id)
    serializer = CommentsSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_comment(request):
    print(
        'User ', f"{request.user.id}{request.user.username}")
    if request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)

@api_view(['PUT', 'GET'])
@permission_classes([IsAuthenticated])
def update_comment(request, pk):
    updated = get_object_or_404(Comment, pk=pk)
    serializer=CommentsSerializer(updated,data=request.data)
    serializer.is_valid(raise_exception=True)
    if request.method == 'PUT':
        serializer.save(user=request.user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
    
# @api_view(['PUT'])
# # def like_comment(request, pk):
# #     like = get_object_or_404(Comment, pk=pk)
# #     serializer = CommentsSerializer(like, data=request.data)
# #     serializer.is_valid(raise_exception=True)
# #     serializer.save()
# #     return Response(serializer.data, status=status.HTTP_201_CREATED)
