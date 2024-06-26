import json

from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *


class TestListByTypeAPIView(APIView):
    serializer_class = TestSerializer
    permission_classes = [IsAuthenticated]
    def get(self, request, test_type):
        test = Test.objects.get_by_test_type(test_type=test_type)
        serializer = self.serializer_class(test)
        return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_test_result(request, test_type, username):
    answers = request.data
    serializer = TestResultSerializer(data={"test_type": test_type, "answers": answers, "username": username})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_test_result(request, test_type, username):
    test_results = TestResult.objects.filter(test_type=test_type, username = username)
    if test_results.exists():
        return Response(test_results.last().answers)
    else:
        return Response({"error": "No test results found for the specified test type"},
                        status=status.HTTP_404_NOT_FOUND)


@api_view(['GET', 'POST'])
def discipline_list(request):
    if request.method == 'GET':
        disciplines = Discipline.objects.all()
        serializer = DisciplineSerializer(disciplines, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DisciplineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def discipline_detail(request, pk):
    discipline = get_object_or_404(Discipline, pk=pk)

    if request.method == 'GET':
        serializer = DisciplineSerializer(discipline)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DisciplineSerializer(discipline, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        discipline.delete()
        return Response({'message': 'Discipline deleted successfully'}, status=204)


@api_view(['GET', 'POST'])
def university_list(request):
    if request.method == 'GET':
        universities = University.objects.all()
        serializer = UniversitySerializer(universities, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UniversitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def university_detail(request, pk):
    university = get_object_or_404(University, pk=pk)

    if request.method == 'GET':
        serializer = UniversitySerializer(university)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UniversitySerializer(university, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        university.delete()
        return Response({'message': 'Discipline deleted successfully'}, status=204)

@api_view(['GET', 'POST'])
def specialty_list(request):
    if request.method == 'GET':
        specialties = Specialty.objects.all()
        serializer = SpecialtySerializer(specialties, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SpecialtySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def specialty_detail(request, pk):
    specialty = get_object_or_404(Specialty, pk=pk)

    if request.method == 'GET':
        serializer = SpecialtySerializer(specialty)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SpecialtySerializer(specialty, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        specialty.delete()
        return Response({'message': 'University deleted successfully'}, status=204)

@api_view(['GET', 'POST'])
def consultant_list(request):
    if request.method == 'GET':
        consultants = Consultant.objects.all()
        serializer = ConsultantSerializer(consultants, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ConsultantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def consultant_detail(request, pk):
    consultant = get_object_or_404(Consultant, pk=pk)

    if request.method == 'GET':
        serializer = ConsultantSerializer(consultant)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ConsultantSerializer(consultant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        consultant.delete()
        return Response({'message': 'Consultant deleted successfully'}, status=204)

@api_view(['GET', 'POST'])
def city_list(request):
    if request.method == 'GET':
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def city_detail(request, pk):
    city = get_object_or_404(City, pk=pk)

    if request.method == 'GET':
        serializer = CitySerializer(city)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CitySerializer(city, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        city.delete()
        return Response({'message': 'City deleted successfully'}, status=204)


@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not (username and email and password):
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'User with this username or email already exists'}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        return JsonResponse({'success': 'User registered successfully'})

    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)