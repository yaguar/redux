from django.shortcuts import render

from djrest.models import TelNote
from djrest.serializers import TelNoteSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
#efrom rest_framework import generic
# Create your views here.

class TelNoteView(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    
    def get(self, request, format=None):
        telnotes = TelNote.objects.all()
        serializer = TelNoteSerializer(telnotes, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TelNoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        number = request.data['number']
        serializer = TelNote.objects.all()
        serializer[number].delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def contact_list(request):
	return render(request, 'index.html')

