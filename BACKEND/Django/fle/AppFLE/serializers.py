from rest_framework import serializers
from django.contrib.auth import get_user_model 
from django.contrib.auth.hashers import make_password
from .models import Servicios


def validate_password(self, value):
    return make_password(value)

class UserSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8)
    is_staff = serializers.BooleanField()

    class Meta:
        model = get_user_model()
        fields = ('id','email', 'username','is_staff', 'password')

class ServiciosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Servicios
        fields= '__all__'