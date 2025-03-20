from django.shortcuts import render
from .models import Student
from rest_framework import generics
from .serializers import StudentAPISerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.

class StudentAPIView(generics.ListCreateAPIView): 
    queryset = Student.objects.all()
    serializer_class = StudentAPISerializer
    permission_classes = [IsAuthenticated]
    

class StudentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentAPISerializer
    permission_classes = [AllowAny]