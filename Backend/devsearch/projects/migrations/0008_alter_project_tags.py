# Generated by Django 4.1.5 on 2023-04-02 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0007_alter_project_owner_remove_project_tags_project_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='tags',
            field=models.JSONField(blank=True, default='None'),
        ),
    ]
