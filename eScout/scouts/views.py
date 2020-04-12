from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from django.views import View
from django.core import serializers
from rest_framework import status
from rest_framework.views import APIView

from .models import *
from .serializers import *


class ScoutsList(APIView):

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer(User.objects.all(),  many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    def post(self, request, *args, **kwargs):
        return HttpResponse()
