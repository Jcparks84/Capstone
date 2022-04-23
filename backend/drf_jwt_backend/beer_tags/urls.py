from django.urls import path, include
from beer_tags import views


urlpatterns = [
    path('', views.get_brewery_tags),
    path('<int:brewery_id>/', views.brewery_tags),
]