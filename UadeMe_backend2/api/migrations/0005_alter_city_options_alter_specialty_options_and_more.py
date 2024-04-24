# Generated by Django 5.0.4 on 2024-04-23 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_city_consultant_discipline_specialty_university'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='city',
            options={'verbose_name_plural': 'Cities'},
        ),
        migrations.AlterModelOptions(
            name='specialty',
            options={'verbose_name_plural': 'Specialties'},
        ),
        migrations.AlterModelOptions(
            name='university',
            options={'verbose_name_plural': 'Universities'},
        ),
        migrations.AlterField(
            model_name='consultant',
            name='name',
            field=models.TextField(max_length=100),
        ),
        migrations.AlterField(
            model_name='discipline',
            name='name',
            field=models.TextField(max_length=100),
        ),
        migrations.AlterField(
            model_name='specialty',
            name='name',
            field=models.TextField(max_length=100),
        ),
        migrations.AlterField(
            model_name='university',
            name='name',
            field=models.TextField(max_length=100),
        ),
    ]
