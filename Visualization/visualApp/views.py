from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.

def Hello_world_test(request):
	#return HttpResponse("Hello,world")
	return render(request,"hello.html")