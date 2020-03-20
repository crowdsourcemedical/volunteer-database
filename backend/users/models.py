from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['skill','location']

    objects = CustomUserManager()

    skill = models.CharField(blank=True, max_length=100)
    description = models.CharField(blank=True, max_length=100)
    # Should be change to a Location object once that is implemented
    location = models.CharField(blank=True, max_length=100) 


    def __str__(self):
        return self.email


class Location():
    """
    Should store a location, (country and city/state).
    Should also store a timezone. This can be a required form to fill out or we can calcuate it based on the location.
    Should have a get_local_time() method that returns the local time.
    """
    #country = 
    #city = 
    #timezone = 

    def __str(self):
            return self.location

    def get_local_time(self):
        """
        returns the local date time for the user
        """
        pass
