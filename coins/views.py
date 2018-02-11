from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers
from coins.models import AllCoinInfo

from cryptocompy import price, coin
from coinmarketcap import Market
import json


coin_market = Market()
ticker = coin_market.ticker(limit=10)

# model objects
coins_data = AllCoinInfo.objects.all()


def index(request):
    
    return render(request, 'coins/base.html', {'symbol': ticker,
                                               'coins_data': coins_data})

def exchanges(request):

    return render(request, "coins/exchanges.html", {})


def crypto_news(request):

    return render(request, "coins/news.html", {})


def coin_rank_info(request):

    '''
    gets coinmarketcap api for coin rank/name/symbol
    '''

    load = json.dumps(json.dumps(ticker))
    return HttpResponse(load)

def coin_price_info(request):

    '''
    gets live coin prices/volumes etc.
    '''

    # api
    crypto_api = price
    # access coin symbol objects in database. Seperate by comma
    coin_symbols = ",".join(name.symbol for name in coins_data)


    # get coin symbol api info
    coin_price = crypto_api.get_current_price([coin_symbols], ["USD"], full=True)
    dump = json.dumps(coin_price)

    return HttpResponse(dump)
