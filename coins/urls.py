from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'coin/<str:coin>', views.coin_info, name='coin_info'),
    path(r'coin-rank-info', views.coin_rank_info, name='coin_rank'),
    path(r'coin-data', views.coin_data, name='coin_data'),
    path(r'news', views.crypto_news, name="news"),
    path(r'exchanges', views.exchanges, name='exchanges'),
]
