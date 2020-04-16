from django.contrib.auth.models import User
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
    email = serializers.CharField(required=False)

    status = serializers.CharField()

    user_main_photo = serializers.CharField(required=False)

    got_achievements = AchievementsSerializer(many=True)

    money_bag = serializers.FloatField()

    chats = ChatSerializer(many=True)

    is_loged_in = serializers.BooleanField()

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.login = validated_data.get('login', instance.login)
        instance.password = validated_data.get('password', instance.password)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.user_main_photo = validated_data.get('user_main_photo', instance.user_main_photo)
        instance.status = validated_data.get('status', instance.status)
        instance.money_bag = validated_data.get('money_bag', instance.money_bag)
        instance.is_loged_in = validated_data.get('is_loged_in', instance.is_loged_in)
        instance.save()
        return instance


class PhotoSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    user = UserSerializer()
    data = serializers.CharField()
