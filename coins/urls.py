from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'coin-info', views.coin_info, name='coin_rank'),
    path(r'coin-price-info', views.coin_price_info, name='coin_info'),
    path(r'news', views.crypto_news, name="news"),
    path(r'exchanges', views.exchanges, name='exchanges'),
]
