from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from rest_framework import status
from rest_framework.views import APIView

from .models import (User, Achievements,
                     Chat, Messages,
                     Photo)
from .serializers import *


class Auth(APIView):

    def get(self, request, *args, **kwargs):
        data = request.GET
        print(data['login'], data['password'])
        user = User.objects.filter(login=data['login'], password=data['password'])
        print('HERE IS THE PROBLEM')
        if len(user):
            serializer = UserSerializer(user[0])
            return JsonResponse(serializer.data, safe=False)
        else:
            return JsonResponse({}, status=status.HTTP_401_UNAUTHORIZED, safe=False)


class ScoutsList(APIView):

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer(User.objects.all(),  many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    def post(self, request, *args, **kwargs):
        return JsonResponse()


class ScoutInfo(APIView):

    def get(self, request, *args, **kwargs):
        id = request.GET['id']
        serializer = UserSerializer(User.objects.get(id=id))
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    def post(self, request, *args, **kwargs):
        user = UserSerializer.create(request.POST)
        return JsonResponse(user, safe=False)

    def put(self, request, *args, **kwargs):
        data = request.PUT
        try:
            user = UserSerializer.update(
                User.objects.get(
                    login=data['login'],
                    password=data['password']
                )
            )
            return JsonResponse(user, safe=False)
        except:
            return JsonResponse(
                {'info': 'який хитрючий, так просто не вийде'},
                status=status.HTTP_401_UNAUTHORIZED,
                safe=False
            )


class BadgesList(APIView):

    def get(self, request, *args, **kwargs):
        serializer = AchievementsSerializer(Achievements.objects.all(), many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    def post(self, request, *args, **kwargs):
        return JsonResponse()
