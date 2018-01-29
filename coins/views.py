from django.shortcuts import render, HttpResponse
from coins.models import AllCoinInfo

from cryptocompy import price
from coinmarketcap import Market
import json



# api's to avoid
# - binance

coin_market = Market()
ticker = coin_market.ticker(limit=10)


def index(request):
    coins_data = AllCoinInfo.objects.all()
    return render(request, 'coins/base.html', {'symbol': ticker,
                                               'coins_data': coins_data})


def coin_info(request):

    '''
    gets coinmarketcap api for coin rank/name/symbol
    '''

    json_info = json.dumps(ticker)
    return HttpResponse(json_info[0])




def coin_price_info(request):

    '''
    gets live coin prices/volumes etc.
    '''

    coin_symbol = ''
    coin = price
    coin_price = coin.get_current_price("XRP", ["USD"], full=True)
    dump = json.dumps(coin_price)

    return HttpResponse(dump)
