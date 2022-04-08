from django.urls import path, include
from replies import views


urlpatterns = [
    path('', views.user_reply),
    path('<int:comment>/', views.user_reply),
    path('api/replies/', views.get_all_replies),
]