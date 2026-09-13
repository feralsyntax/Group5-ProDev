from django.db import models
from django.contrib.auth.models import AbstractUser
from pytz import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver


# Create your models here.
class User(AbstractUser):
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    profile_picture = models.ImageField(upload_to='images/',default='default.png')
    bio = models.TextField(max_length=500, default="My Bio", blank=True)
    name = models.CharField(blank=True, max_length=120)
    phone_number = models.CharField(blank=True, max_length=120)
    email = models.CharField(max_length=60, blank=True)

    def __str__(self):
        return self.user.username

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save

class Book(models.Model):
 name_of_book = models.CharField(blank=True, max_length=120,)
 author = models.CharField(blank=True, max_length=120)
 about = models.CharField(blank=True, max_length=120)
 def __str__(self):
        return self.name_of_book

