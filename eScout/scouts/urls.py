from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('get-scouts-list/', ScoutsList.as_view()),
    path('get-all-badges/', BadgesList.as_view()),
]
