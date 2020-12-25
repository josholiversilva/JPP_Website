from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader

loader.get_template('main/base.html')

def index(request):
    template = loader.get_template('main/index.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context,request))

def contact(request):
    template = loader.get_template('main/contact.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context,request))