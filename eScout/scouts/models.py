from django.db import models

# Create your models here.

class Achievements(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField()
    text = models.TextField()
    photo_data = models.TextField()

    def __str__(self, *args, **kwargs):
        return self.title


class Chat(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField()


class Messages(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    date = models.BigIntegerField()
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.TextField()
    last_name = models.TextField()
    status = models.TextField()
    got_achievements = models.ManyToManyField(Achievements)
    money_bag = models.FloatField()
    chats = models.ManyToManyField(Chat)
    is_loged_in = models.BooleanField()

    def is_login(self, *args, **kwargs):
        return self.is_loged_in

    def get_full_name(self, *args, **kwargs):
        return f'{self.first_name} {self.last_name}'

    def __str__(self, *args, **kwargs):
        return self.get_full_name(self)


class Photo(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    data = models.TextField()

    def __str__(self, *args, **kwargs):
        return self.data