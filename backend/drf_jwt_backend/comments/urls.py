from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_comment),
    path('<slug:brewery_id>/', views.get_video_comments),
    path('<int:pk>/', views.update_comment),
]