from django.urls import path

from .views import *

urlpatterns = [
    path('get-scouts-list/', ScoutsList.as_view()),
    path('get-all-badges/', BadgesList.as_view()),
    path('login/', Auth.as_view()),
    path('register/', ScoutInfo.as_view()),
    path('get-scout-info/<int:pk>', ScoutInfo.as_view()),
    path('update-scout-info/<str:login>/', ScoutInfo.as_view()),
]
