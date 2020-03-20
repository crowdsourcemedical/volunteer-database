from rest_framework import serializers
from users.models import CustomUser
from .managers import CustomUserManager

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'skill', 'location', 'description']

class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    skill = serializers.ChoiceField(['Engineer', 'Manager', 'Software Developer'])
    location = serializers.CharField(write_only=True)
    description = serializers.CharField(allow_blank=True)

    def save(self, request):
        user = CustomUserManager.create_user(email, password1, skill, location, description)
        return user
