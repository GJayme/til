from django.urls import path
from . import views

urlpatterns = [
  path('', views.index, name='list'),
  path('update_app/<str:pk>', views.updateApp, name='update_app'),
  path('delete/<str:pk>', views.deleteApp, name='delete'),
]