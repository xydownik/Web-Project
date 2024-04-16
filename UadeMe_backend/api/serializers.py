from rest_framework import serializers
from .models import Test


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
