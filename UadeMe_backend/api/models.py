from django.db import models


class TestManager(models.Manager):

    def get_by_test_type(self, test_type):
        return self.filter(test_type=test_type)[0]


class Test(models.Model):

    objects = TestManager()

    TEST_TYPES = [
        ('test1', 'Тест 1'),
        ('test2', 'Тест 2'),
        ('test3', 'Тест 3'),]
    test_type = models.CharField(max_length=20, choices=TEST_TYPES)
    questions = models.TextField()
    variants = models.TextField()


class TestResult(models.Model):
    test_type = models.CharField(max_length=20)
    username = models.CharField(max_length=100)
    answers = models.JSONField(default=list)


class Discipline(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class City(models.Model):
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.city
    class Meta:
        verbose_name_plural = 'Cities'


class Specialty(models.Model):
    name = models.CharField(max_length=100)
    grants = models.IntegerField()
    description = models.TextField()
    eduPrograms = models.IntegerField()
    demand = models.CharField(max_length=100)
    unisNum = models.IntegerField()
    general = models.IntegerField()
    quota = models.IntegerField()
    photo = models.URLField()
    disciplines = models.ManyToManyField(Discipline)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Specialties'



class University(models.Model):
    name = models.CharField(max_length=100)
    photo = models.URLField()
    specialties = models.ManyToManyField(Specialty)
    phoneNumber = models.CharField(max_length=20)
    cost = models.IntegerField()
    uniType = models.CharField(max_length=100)
    location = models.ForeignKey(City, on_delete=models.CASCADE)
    grantScore = models.IntegerField()
    paidScore = models.IntegerField()
    address = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Universities"



class Consultant(models.Model):
    name = models.CharField(max_length=100)
    profession = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    telegram = models.CharField(max_length=100)
    whatsApp = models.CharField(max_length=100)
    insta = models.CharField(max_length=100)
    mail = models.EmailField()
    photo = models.URLField()
    rating = models.FloatField()

    def __str__(self):
        return self.name