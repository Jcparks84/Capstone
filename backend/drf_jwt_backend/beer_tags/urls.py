from django.urls import path, include
from beer_tags import views


urlpatterns = [
    path('', views.brewery_tags),
    path('<int:brewery_id>/', views.get_brewery_tags),
]