from django.contrib import admin
from django.urls import path, include
from api.views import TracksViews


urlpatterns = [
    path('', TracksViews.as_view())
]
