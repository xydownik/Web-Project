from rest_framework import serializers

from .models import Test, TestResult, University, Specialty, City, Discipline, Consultant


class TestSerializer(serializers.ModelSerializer):

    questions = serializers.SerializerMethodField()
    variants = serializers.SerializerMethodField()

    def get_questions(self, obj):
        return obj.questions.split('\r\n')

    def get_variants(self, obj):
        variants = obj.variants.split('\r\n')

        variants = [variant.split('|') for variant in variants]
        result = [[{"text": v[0], "answer": v[1]} for var in variant for v in [var.split('&')]] for variant in variants]
        return result

    class Meta:
        model = Test
        fields = ['questions', 'variants']


class TestResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestResult
        fields = ['id', 'test_type', 'answers']

    def create(self, validated_data):
        test_type = validated_data.get('test_type')
        answers = validated_data.get('answers')
        result = get_answers_for_test_type(test_type, answers)
        test_result = TestResult.objects.create(
            test_type=test_type,
            answers=result
        )
        return test_result

    def update(self, instance, validated_data):
        pass


def get_answers_for_test_type(test_type, answers):
    if test_type == "test1":

        categories_counts = {
            "nature": 0,
            "tech": 0,
            "human": 0,
            "system": 0,
            "art": 0
        }

        for answer in answers:
            if answer in ('1a', '3b', '6a', '10a', '11a', '13b', '16a', '20a'):
                categories_counts['nature'] += 1
            elif answer in ('1b', '4a', '7b', '9a', '11b', '14a', '17b', '19a'):
                categories_counts['tech'] += 1
            elif answer in ('2a', '4b', '6b', '8a', '12a', '14b', '16b', '18a'):
                categories_counts['human'] += 1
            elif answer in ('2b', '5a', '9b', '10b', '12b', '15b', '19b', '20b'):
                categories_counts['system'] += 1
            elif answer in ('3a', '5b', '7a', '8b', '13a', '15b', '17a', '18b'):
                categories_counts['art'] += 1

        the_most = max(categories_counts, key=categories_counts.get)
        categories_counts["the_most"] = the_most

        return categories_counts

    elif test_type == "test2":

        categories_counts = {
            "people": 0,
            "research": 0,
            "practice": 0,
            "aesthetics": 0,
            "extreme": 0,
            "economic": 0
        }

        for answer in answers:
            if answer in ('1a', '3a', '5a', '6a', '8a', '11a', '13a', '15a', '16a', '18a', '20a', '24a'):
                categories_counts['people'] += 1
            elif answer in ('2a', '3b', '5b', '6b', '7a', '9a', '11b', '14a', '18b', '21a', '22a', '23a'):
                categories_counts['research'] += 1
            elif answer in ('4a', '5c', '7b', '11c', '12a', '15b', '16b', '18c', '19a', '20b', '21b', '22b'):
                categories_counts['practice'] += 1
            elif answer in ('1b', '2b', '3c', '7c', '9b', '10a', '12b', '14b', '17a', '21c', '22c', '23b'):
                categories_counts['aesthetics'] += 1
            elif answer in ('2c', '4b', '8b', '9c', '10b', '12c', '13b', '14c', '15c', '17b', '19b', '24b'):
                categories_counts['extreme'] += 1
            elif answer in ('1c', '4c', '6c', '8c', '10c', '13c', '16c', '17c', '19c', '20c', '23c', '24c'):
                categories_counts['economic'] += 1

        return categories_counts

    elif test_type == "test3":
        return answers


class DisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class SpecialtySerializer(serializers.ModelSerializer):
    disciplines = DisciplineSerializer(many=True)

    class Meta:
        model = Specialty
        fields = '__all__'

class UniversitySerializer(serializers.ModelSerializer):
    specialties = SpecialtySerializer(many=True)
    location = CitySerializer()

    class Meta:
        model = University
        fields = '__all__'

class ConsultantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultant
        fields = '__all__'