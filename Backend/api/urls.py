from django.urls import path    
from .views import StudentAPIView, StudentDetailAPIView


urlpatterns = [ path('students/', StudentAPIView.as_view(), name='students'),
                path('students/<int:pk>/', StudentDetailAPIView.as_view(), name='student-detail')
            ]