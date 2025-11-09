from django.urls import path
from . import views

urlpatterns =[
    path('', views.home, name='home'),
    path('product/', views.product, name='product'),
    path('shop/', views.shop, name='shop'),
    path('cart/', views.cart, name='cart'),
]