from django.urls import path, include
from replies import views


urlpatterns = [
    path('', views.get_all_replies),
    path('<int:comment>/', views.user_reply),
    path('new', views.create_reply)
    # path('api/replies/', views.get_all_replies),
]
