# Generated by Django 5.0.4 on 2024-04-16 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test_type', models.CharField(choices=[('type 1', 'Тип 1'), ('type 2', 'Тип 2'), ('type 3', 'Тип 3')], max_length=20)),
                ('questions', models.TextField()),
                ('variants', models.TextField()),
            ],
        ),
    ]
