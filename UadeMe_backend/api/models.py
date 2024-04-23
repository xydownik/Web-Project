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
    answers = models.JSONField(default=list)