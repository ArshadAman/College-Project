# Generated by Django 4.1.5 on 2023-04-02 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0009_alter_project_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='tags',
            field=models.JSONField(blank=True, default=dict),
        ),
    ]
