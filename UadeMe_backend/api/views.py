from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Test, TestResult
from .serializers import TestSerializer, TestResultSerializer


class TestListByTypeAPIView(APIView):
    serializer_class = TestSerializer

    def get(self, request, test_type):
        test = Test.objects.get_by_test_type(test_type=test_type)
        serializer = self.serializer_class(test)
        return Response(serializer.data)


@api_view(['POST'])
def save_test_result(request, test_type):
    answers = request.data
    serializer = TestResultSerializer(data={"test_type": test_type, "answers": answers})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_test_result(request, test_type):
    test_results = TestResult.objects.filter(test_type=test_type)
    if test_results.exists():
        return Response(test_results.last().answers)
    else:
        return Response({"error": "No test results found for the specified test type"},
                        status=status.HTTP_404_NOT_FOUND)

