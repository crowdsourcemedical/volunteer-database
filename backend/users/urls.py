from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.getUsers.as_view()),
    path('get/<int:pk>/' views.userDetail.as_view(),
]
