from django.urls import path
from .views import *

urlpatterns = [
    path('tests/<str:test_type>/', TestListByTypeAPIView.as_view(), name='test-list-by-type'),
    path('save_test_result/<str:test_type>/', save_test_result, name='save-test-result'),
    path('get_test_result/<str:test_type>/', get_test_result, name='get-test-result'),
    path('disciplines/', discipline_list, name='discipline_list'),
    path('disciplines/<int:pk>/', discipline_detail, name='discipline_detail'),
    path('specialties/', specialty_list, name='specialty_list'),
    path('specialties/<int:pk>/', specialty_detail, name='specialty_detail'),
    path('universities/', university_list, name='university_list'),
    path('universities/<int:pk>/', university_detail, name='university_detail'),
    path('consultants/', consultant_list, name='consultant_list'),
    path('consultants/<int:pk>/', consultant_detail, name='consultant_detail'),
    path('cities/', city_list, name='city_list'),
    path('cities/<int:pk>/', city_detail, name='city_detail'),


]