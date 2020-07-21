from django import forms
from django.forms import ModelForm

from .models import*

class AppForm(forms.ModelForm):
  class Meta:
    model = App
    fields = '__all__'