from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import*
from .forms import*

def index(request):
  app = App.objects.all()
  
  form = AppForm()

  if request.method =='POST':
    form = AppForm(request.POST)
    if form.is_valid():
      form.save()
    return redirect('/')

  context = {'App': app, 'form': form}
  
  return render(request, 'App/list.html', context)

def updateApp(request, pk):
  app = App.objects.get(id=pk)
  form = AppForm(instance=app)

  if request.method =='POST':
    form = AppForm(request.POST,instance=app)
    if form.is_valid():
      form.save()
    return redirect('/')

  context = {'form': form}
  return render(request, 'App/update_app.html', context)

def deleteApp(request, pk):
  item = App.objects.get(id=pk)

  if request.method =='POST':
    item.delete()
    return redirect('/')
    
  context ={'item': item}
  return render(request, 'App/delete.html', context)