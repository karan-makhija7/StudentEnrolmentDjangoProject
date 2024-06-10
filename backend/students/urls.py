from django.urls import path

from rest_framework import urlpatterns

from .views import *
from rest_framework import routers

""" router registers the url paths"""
router = routers.DefaultRouter()
router.register('students', StudentsViewSet)
urlpatterns=router.urls