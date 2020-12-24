from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('main/index.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    loader.get_template('main/base.html')
    return HttpResponse(template.render(context,request))