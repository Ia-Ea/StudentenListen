from django.db import models

# Create your models here.
class Student (models.Model):
    id = models.AutoField(primary_key = True)
    vorname = models.CharField(max_length= 50)
    nachname = models.CharField(max_length=50)
    alter = models.FloatField()

    def __str__(self):
        return self.vorname 