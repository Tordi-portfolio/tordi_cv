from django.shortcuts import render, get_object_or_404


def home(request):
    return render(request, 'home.html')

def index(request):
    return render(request, 'index.html')