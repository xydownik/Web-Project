from django.db import models


class Test(models.Model):
    TEST_TYPES = [
        ('test1', 'Тест 1'),
        ('test2', 'Тест 2'),
        ('test3', 'Тест 3'),
    ]

    test_type = models.CharField(max_length=20, choices=TEST_TYPES)
    questions = models.TextField()
    variants = models.TextField()