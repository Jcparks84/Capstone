from rest_framework.views import APIView
from ratings.serializers import RatingSerializer
from ratings.models import Rating
from rest_framework import status
from rest_framework.response import Response

class RatingViewSet (APIView) :
    def post(self, request):
        serializer = RatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, id=None):
        if id:
            item = Rating.objects.filter(brewery_id=id)
            serializer_class = RatingSerializer(item, many=True)
            return Response({"status": "success", "data": serializer_class.data}, status=status.HTTP_200_OK)

        queryset = Rating.objects.all()
        serializer_class = RatingSerializer(queryset, many=True)
        return Response({"status": "success", "data": serializer_class.data}, status=status.HTTP_200_OK)
