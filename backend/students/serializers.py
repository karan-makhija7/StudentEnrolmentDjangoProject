from rest_framework.serializers import ModelSerializer
from .models import Student


""" provide the model to the frontend"""
class StudentSerializer(ModelSerializer):
    class Meta:
        model= Student
        fields=['id',
        'email',
        'enrolment_time',
        'first_name',
        'last_name',
        'course_title',
        'course_major',
        'course_minor',
        'course_duration',
        'enrolled',
        'enrolment_date']