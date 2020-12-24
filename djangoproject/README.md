# What I've learned with django

---

## 1. Create project
django-admin startproject (project_name)

## 2. Create app
python3 manage.py createapp (app_name)

## 3. Create urls.py in app
cd app_name -> touch urls.py

## 4. Add App_name.Config to settings.py
**INSTALLED_APPS[app_name.apps.App_name.Config]**  
^^ This is very important in order for html/css to be rendered properly using default

## 5. Add absolute paths to settings.py
**TEMPLATES[{DIRS: '/absolute/path/dir'}]**  
^^ Important if not using the default directory app path: app_name/templates/app_name/file.html. **NOTE: 2nd app_name is "namespace" so app knows location when referencing in urls.py or templates i.e. include('main.urls') or {% extends main/file.html %}**

Same goes for css files.