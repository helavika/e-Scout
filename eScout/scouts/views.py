from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from rest_framework import status
from rest_framework.views import APIView

from .models import *
from .serializers import *


class Auth(APIView):

    def get(self, request, *args, **kwargs):
        data = request.GET
        user = User.objects.filter(login=data['login'], password=data['password'])
        if len(user):
            serializer = UserSerializer(user[0])
            return JsonResponse(serializer.data, safe=False)
        else:
            return JsonResponse({}, safe=False)

    def post(self, request, *args, **kwargs):
        return JsonResponse(request, safe=False)


class ScoutsList(APIView):

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer(User.objects.all(),  many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    def post(self, request, *args, **kwargs):
        return JsonResponse()


class BadgesList(APIView):

    def get(self, request, *args, **kwargs):
        serializer = AchievementsSerializer(Achievements.objects.all(), many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    def post(self, request, *args, **kwargs):
        return JsonResponse()
