from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['skill']

    objects = CustomUserManager()

    skill = models.CharField(blank=True, max_length=100)
    description = models.CharField(blank=True, max_length=100)


    def __str__(self):
        return self.email
