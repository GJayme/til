from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.

#Dashbord
@login_required(login_url='/login')
def index(request):
  return render(request, 'index.html')

#Login Page
def login_user(request):
  return render(request, 'login.html')

#Login Submit 
def submit_login(request):
  if request.POST:
    username = request.POST.get('username')
    password = request.POST.get('password')
    print(username, password)
    user = authenticate(username = username, password = password)
    if user is not None:
      login(request, user)
      return redirect('/')
    else:
      messages.error(request, 'Usuário ou senha inválida. Favor tentar novamente.')
  return redirect('/login')

# Logout
def logout_user(request):
  logout(request)
  return redirect('/login')