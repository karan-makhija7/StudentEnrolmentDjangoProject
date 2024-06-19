from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime
from django.utils import timezone

class Student(models.Model):
    """ 
    Represents a student with attributes such as name, email, course details, and enrolment information.
    """
    
    first_name = models.CharField(max_length=140)
    last_name = models.CharField(max_length=140)
    email = models.EmailField(unique=True)
    
    course_title = models.CharField(max_length=140)
    course_major = models.CharField(max_length=140)
    course_minor = models.CharField(max_length=140, default="None")
    course_duration = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ]
    )
    
    enrolled = models.BooleanField(default=False)  # Defaulting to False assuming most students start unenrolled
    enrolment_date = models.DateField(default=datetime.date.today)
    enrolment_time = models.DateTimeField(default=timezone.now)  # Store timezone-aware timestamps

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        ordering = ['last_name']
