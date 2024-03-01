from rest_framework import serializers
from core.models import Track, Album, Artist, CoverImage





class TrackSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Track
        fields = ['id', 'title', 'album', 'artists']
        depth = 2


class AlbumSerializer(serializers.ModelSerializer):

    class Meta:
        model = Album
        fields = '__all__'


class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = '__all__'
