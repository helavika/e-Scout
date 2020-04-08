from django.db import models

# Create your models here.

class Achievements(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField()
    text = models.TextField()


class Chat(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField()


class Messages(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    date = models.BigIntegerField()
    chat = models.ForeignKey(Chat)


class MoneyBag(models.Model):
    id = models.AutoField(primary_key=True)
    money_count = models.FloatField()


class User(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.TextField()
    last_name = models.TextField()
    status = models.TextField()
    got_achievements = models.ManyToManyField(Achievements)
    money_bag = models.OneToOneField(MoneyBag)
    chats = models.ManyToManyField(Chat)


class Photo(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User)
    data = models.TextField()