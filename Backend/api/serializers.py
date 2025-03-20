from rest_framework import serializers
from .models import Student

class StudentAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id',
                'vorname',
                'nachname',
                'alter'
                ]