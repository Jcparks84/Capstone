from multiprocessing import context
from django.shortcuts import render, get_object_or_404
from django.template.defaultfilters import slugify
from .models import Beer_tags
from .forms import beer_tags_form
from taggit.models import Tag

def home_view(request):
    beer_tags =Beer_tags.objects.order_by('Beer_Types')
    common_tags = Beer_tags.tags.most_common()[:4]
    form = beer_tags_form(request.Post)
    if form.is_valid():
        newpost = form.save(commit = False)
        newpost.slug = slugify(newpost.title)
        newpost.save()
        form.save_m2m()
    context = {
        'Beers':beer_tags,
        'common_tags':common_tags,
        'form':form,
    }
    return render(request,'homepage.html', context)

def detail_view(request, slug):
    beer_tags = get_object_or_404(Beer_tags, slug=slug)
    context = {
        'Beer':beer_tags,
    }
    return render(request, '', context)

def tagged(request, slug):
    tag = get_object_or_404(Tag, slug=slug)
    beer_type = Beer_tags.objects.filter(tags=tag)
    context = {
        'tag':tag,
        'type':beer_type,
    }
    return render(request, 'homepage.html', context)


# Create your views here.
