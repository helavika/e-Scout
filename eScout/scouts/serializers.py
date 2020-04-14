from django.db import models
from rest_framework import serializers


class AchievementsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    text = serializers.CharField()
    photo_data = serializers.CharField()


class ChatSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    type = serializers.CharField()


class MessagesSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    text = serializers.CharField()
    date = serializers.IntegerField()
    #chat = ChatSerializer()


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField()

    login = serializers.CharField(required=False)
    password = serializers.CharField(required=False)

    first_name = serializers.CharField()
    last_name = serializers.CharField()

    status = serializers.CharField()

    got_achievements = AchievementsSerializer(many=True)

    money_bag = serializers.FloatField()

    chats = ChatSerializer(many=True)

    is_loged_in = serializers.BooleanField()


class PhotoSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    user = UserSerializer()
    data = serializers.CharField()
