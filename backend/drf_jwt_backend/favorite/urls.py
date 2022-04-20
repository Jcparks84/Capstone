from django.urls import path, include
from favorite import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.favorite_brewery),
    path('<slug:brewery_id>/', views.user_Favortie)
]