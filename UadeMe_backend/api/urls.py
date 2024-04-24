from django.urls import path
from .views import (TestListByTypeAPIView, save_test_result, get_test_result)

urlpatterns = [
    path('tests/<str:test_type>/', TestListByTypeAPIView.as_view(), name='test-list-by-type'),
    path('save_test_result/<str:test_type>/', save_test_result, name='save-test-result'),
    path('get_test_result/<str:test_type>/', get_test_result, name='get-test-result'),
]