from django.urls import path

from rest_framework.routers import DefaultRouter

from .views import *


""" router registers the url paths"""
router = DefaultRouter()
router.register('students', StudentsViewSet)
urlpatterns=router.urls