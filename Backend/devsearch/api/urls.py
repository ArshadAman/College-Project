from django.urls import path
from . import views

# JWT Imports
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # JWT URLS
    path('users/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),#Login Route
    path('users/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # API ENDPOINTS
    path('', views.getRoutes),
    path('projects/', views.getProjects.as_view()),
    path('projects/<str:pk>/', views.getProject),
    path('projects/<str:pk>/vote/', views.projectVote),
    path('add-project/', views.createProject),
    path('delete-project/delete/', views.deleteProject),
    path('top-rated-projects/', views.topProjects),

    # User actions
    path('users/signup/', views.Signup),
    path('users/update-profile/', views.UpdateProfile),
    path('users/get-profile/', views.getUserProfile),
    path('users/get-profiles/', views.getProfiles.as_view()),
    path('users/top-profile/', views.topProfile),
    path('users/profile-detail/<str:pk>/', views.getSingleProfile),

    # Add Skills
    path('users/add-skills/', views.addSkills),
    path('users/edit-skills/', views.editSkills),
    path('users/delete-skills/', views.deleteSkills),
]
