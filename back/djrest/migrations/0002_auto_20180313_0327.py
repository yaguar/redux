# Generated by Django 2.0.2 on 2018-03-13 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djrest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='telnote',
            name='phone',
            field=models.CharField(max_length=20),
        ),
    ]
