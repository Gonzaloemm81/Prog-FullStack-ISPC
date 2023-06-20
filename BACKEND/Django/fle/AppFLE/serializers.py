from rest_framework import serializers
from django.contrib.auth import get_user_model 
from django.contrib.auth.hashers import make_password
from .models import  Factura, Servicios



class UserSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=4)
    is_staff = serializers.BooleanField()

    def validate_password(self, value):
        return make_password(value)

    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'username', 'is_staff', 'password')
    

class ServiciosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Servicios
        fields= '__all__'
        
class FacturasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Factura
        fields= '_all_'        
