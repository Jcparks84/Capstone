from pyexpat import model
from django import forms
from .models import Beer_tags

class beer_tags_form(forms.ModelForm):
    class meta:
        model = Beer_tags
        fields = [
            'beer type'
        ]