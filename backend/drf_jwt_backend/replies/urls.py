from django.urls import path, include
from replies import views


urlpatterns = [
    path('<int:comment>/', views.user_reply),
    path('all/', views.get_all_replies),
]