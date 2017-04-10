from django.shortcuts import render
from django.shortcuts import HttpResponse
from visualApp import models

# Create your views here.

def Hello_world_test(request):
	return render(request,"index.html")
	

def Back_end_test(request):
	return render(request,"back_end_test.html")
	
	
all_user_info = []
	
	
def backend(request):
	if request.method == 'POST':
		username = request.POST.get('username','noName')
		password = request.POST.get('password','noPassword')
		models.UserInfo.objects.create(user = username,pwd = password)
		global all_user_info
		all_user_info = models.UserInfo.objects.all()
	return render(request,"back_end_test.html",{"data":all_user_info})