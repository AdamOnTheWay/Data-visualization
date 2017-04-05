from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.

def Hello_world_test(request):
	return render(request,"index.html")