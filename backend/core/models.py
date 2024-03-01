from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.


class Track(models.Model):
    title = models.CharField('Заголовок')
    artists = models.ManyToManyField('core.Artist', related_name='tracks')
    album = models.ForeignKey('core.Album', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Трек'
        verbose_name_plural = 'Треки'


class Artist(models.Model):
    name = models.CharField('Имя/Название')

    class Meta:
        verbose_name = 'Артист'
        verbose_name_plural = 'Артисты'


class Album(models.Model):
    title = models.CharField('Заголовок')
    artists = models.ManyToManyField('core.Artist', related_name='albums')
    cover = models.ImageField('Изображение', upload_to='cover/')

    class Meta:
        verbose_name = 'Альбом'
        verbose_name_plural = 'Альбомы'

    
