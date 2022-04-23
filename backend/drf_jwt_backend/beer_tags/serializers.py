from wsgiref import validate
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Beer_type, Beer

class BeerTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer_type
        fields = ['id', 'name']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'user_permissions', 'date_joined', 'is_active']


class BeerSerializer(serializers.ModelSerializer):
    beer_type_id = serializers.PrimaryKeyRelatedField(queryset=Beer_type.objects.all(), write_only=True, many=True)
    user = UserSerializer(read_only=True)
    class Meta:
        model = Beer
        fields = '__all__'
        depth = 1
        exclude_fields = ('user__password',)

    def create(self, validated_data):
        beer_type_id = validated_data.pop('beer_type_id')
        instance = Beer.objects.create(**validated_data)
        for beer_type in beer_type_id:
            instance.beer_types.add(beer_type)
        return instance
        

"""

for each of the id I pass, 1,2,3
beer_type_1c= Beer_type.objects.get(id=1)
"""