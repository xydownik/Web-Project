# Generated by Django 5.0.4 on 2024-04-16 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_test_test_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test',
            name='test_type',
            field=models.CharField(choices=[('test1', 'Тест 1'), ('test2', 'Тест 2'), ('test3', 'Тест 3')], max_length=20),
        ),
    ]
