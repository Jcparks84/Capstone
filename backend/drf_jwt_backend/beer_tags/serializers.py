from rest_framework import serializers
from .models import Beer_type, Beer

class BeerTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer_type
        fields = ['brewery_id', 'name']

class BeerSerializer(serializers.ModelSerializer):
    beer_type = BeerTypeSerializer(many=True)
    class Meta:
        model = Beer
        fields = ['brewery_id', 'beer_text', 'beer_count', 'beer_type', 'user_id']
        depth = 1

def create(self, validated_data):
    beer_types_data = validated_data.pop('beer_type')
    beer = Beer.objects.create(**validated_data)
    for beer_type_data in beer_types_data:
        beer_type = Beer_type.get(name=beer_type_data['name'])
        if beer_type:
            beer.beer_type.add(beer_type)
        else:
            new_category = Beer_type.objects.create(
                name=beer_type_data['name'])
            beer.beer_type.add(new_category)

    return beer