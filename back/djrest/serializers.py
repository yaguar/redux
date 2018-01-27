from djrest.models import TelNote
from rest_framework import serializers

class TelNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TelNote
        fields = ('first_name', 'last_name', 'phone')
