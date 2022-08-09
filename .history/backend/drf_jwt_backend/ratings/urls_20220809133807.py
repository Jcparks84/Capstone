from django.urls import path, include
from rest_framework import routers
from ratings.views import RatingViewSet

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

router = routers.DefaultRouter()
# router.register(r'add', RatingViewSet)

urlpatterns = [
    path('add', RatingViewSet.as_view()),
    path('get/<str:id>', RatingViewSet.as_view()),
]