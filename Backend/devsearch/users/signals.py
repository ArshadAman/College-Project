from django.db.models.signals import post_save, post_delete
from django.core.mail import message, send_mail
from django.conf import settings

# Reciever Decorators
# from django.dispatch import receiver

# User and Profile Model
from django.contrib.auth.models import User
from .models import Profile




# @receiver(post_save, sender=Profile)
def createProfile(sender, instance, created, **kwargs):
    name_of_user = ""
    if created:
        user = instance
        profile = Profile.objects.create(
            user = user,
            username = user.username,
            email = user.email,
            name = user.first_name,
        )
        name_of_user = user.first_name
        profile.save()

        subject = 'Thank you for joining DevXplore'
        message = f"Dear {name_of_user},\n\nWe wanted to take a moment to thank you for joining DevXplore. We’re thrilled to have you as part of our community.\n\nWe hope you find our website helpful and informative. If you have any questions or feedback, please don’t hesitate to reach out.\n\nBest Regards,\n\nAdmin@DevXplore"

        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [profile.email],
            fail_silently=False,
        )

def UpdateUser(sender, instance, created, **kwargs):
    profile = instance
    user = profile.user
    if created == False:
        user.first_name = profile.name
        user.username = profile.username
        user.email = profile.email
        user.save()

# @receiver(post_delete, sender=Profile)
def deleteUser(sender, instance, **kwargs):
    user = instance.user
    user.delete()

# Other Way(I prefer)
post_save.connect(createProfile, sender=User)
post_save.connect(UpdateUser, sender=Profile)
post_delete.connect(deleteUser, sender=Profile)
