from django.contrib import admin
from core.models import Artist, Track, Album, CoverImage
# Register your models here.
admin.site.register(Artist)
admin.site.register(Track)
admin.site.register(Album)
admin.site.register(CoverImage)