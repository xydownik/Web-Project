from django.urls import path
from .views import TestListByTypeAPIView


urlpatterns = [
    path('tests/<str:test_type>/', TestListByTypeAPIView.as_view(), name='test-list-by-type'),
]