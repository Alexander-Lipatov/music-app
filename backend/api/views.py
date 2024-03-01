from django.shortcuts import render
from rest_framework.generics import ListAPIView

from core.models import Track
from core.serializers import TrackSerializer
# Create your views here.

class TracksViews(ListAPIView):

    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    


