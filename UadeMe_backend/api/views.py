from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Test
from .serializers import TestSerializer


class TestListByTypeAPIView(APIView):
    serializer_class = TestSerializer

    def get(self, request, test_type):
        test = Test.objects.get_by_test_type(test_type=test_type)
        serializer = self.serializer_class(test)
        return Response(serializer.data)
