from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, UserSerializer  # Import your user serializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

# User registration view
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

# Token view to obtain JWT tokens and user information
class LoginView(TokenObtainPairView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        # Call the parent post method to get tokens
        response = super().post(request, *args, **kwargs)

        # Extract user information
        user = User.objects.get(username=request.data['username'])
        user_data = UserSerializer(user).data  # Serialize user data

        # Combine response with tokens and user information
        return Response({
            'tokens': response.data,
            'user': user_data
        })
