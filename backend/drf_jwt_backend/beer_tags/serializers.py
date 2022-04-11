from rest_framework import serializers
from .models import Beer_type, Beer

class BeerTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer_type
        fields = ['id', 'name']

class BeerSerializer(serializers.ModelSerializer):
    beer_type = BeerTypeSerializer(many=True)
    class Meta:
        model = Beer
        fields = ['id', 'beer_text', 'beer_count', 'beer_type', 'user_id']
        depth = 1
        
    def create(self, validated_data):
        pass
        # beer_types_data = validated_data.pop('beer_type')
        # beer = Beer.objects.create(**validated_data)
        # for beer_type in beer_types_data:
        #     type = Beer_type.objects.get(name=beer_type['name'])
        #     if type:
        #         beer.beer_type.add(beer_type)
        #     else:
        #         new_beer = Beer_type.objects.create(
        #             name=beer_type['name'])
        #         beer.beer_type.add(new_beer)
        
        # return beer