from .models import Favorite
from rest_framework import serializers



class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'brewery_id', 'is_favorite']
        depth = 1