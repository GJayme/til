from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Pet
# Create your views here.


@login_required(login_url='/login')
#List All Pets
def list_all_pets(request):
    pet = Pet.objects.filter(active=True)
    return render(request, 'list.html', {'pet': pet})

#List User Pets
def list_user_pets(request):
    pet = Pet.objects.filter(active=True, user=request.user)
    return render(request,'list.html', {'pet': pet})

#Detail Pet
def pet_detail(request, id):
    pet = Pet.objects.get(active=True, id=id)
    return render(request, 'pet.html', {'pet': pet})


#Login Page
def login_user(request):
    return render(request, 'login.html')


#Login Submit
def submit_login(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            messages.error(
                request, 'Usuário ou senha inválida. Favor tentar novamente.')
    return redirect('/login')


# Logout
def logout_user(request):
    logout(request)
    return redirect('/login')
