from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import FacturasSerializer, UserSerializer, ServiciosSerializer
from .models import Clientes, Servicios, Factura
from django.contrib.auth import get_user_model 


# Create your views here.

class LoginView(APIView):
    def post(self, request):

        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        if user:
            login(request, user)
            return Response(
                UserSerializer(user).data,
                status=status.HTTP_200_OK)
        

        return Response(status=status.HTTP_404_NOT_FOUND)
    
class LogoutView(APIView):
    def post(self, request):

        logout(request)

        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer


class ServiciosViewSet(viewsets.ModelViewSet):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer

class UsersViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class FacturasViewSet(viewsets.ModelViewSet):
    queryset = Factura.objects.all()
    serializer_class = FacturasSerializer
