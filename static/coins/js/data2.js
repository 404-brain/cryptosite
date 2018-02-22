function coinInfo2(){

    var http = new XMLHttpRequest();
    http.open('GET', '/coin-data', true);

    http.onload = function(){
        if(this.status == 200){
            var coins_json = JSON.parse(this.responseText);

            // All coin JSON info
            for(key in coins_json){
                var coin_price_json = coins_json[key]["USD"]["PRICE"];
                // coin symbol, example: btc, neo etc.
                var coin_symbol_json = coins_json[key]["USD"]["FROMSYMBOL"];
                var coin_mrktcap_json = coins_json[key]["USD"]["MKTCAP"];
                var volume_json = coins_json[key]["USD"]["TOTALVOLUME24H"];

                var coin_symbol = document.getElementById("coin-symbol").innerHTML;
                var coin_name = document.getElementById("coin-name").innerHTML;

                // Add JSON Info to each coin
                if(coin_symbol == coin_symbol_json || coin_name == coin_symbol_json){
                    var price, price_title, vol, mrktcap;
                    // coin price
                    price = document.getElementById("coin-price")
                    price_title = document.getElementById("symbol-title");
                    price.innerHTML = coin_price_json.toLocaleString();
                    price_title.innerHTML = coin_symbol_json + '(USD): $' + coin_price_json.toLocaleString();

                    // coin vol
                    vol = document.getElementById("coin-vol");
                    vol.innerHTML = volume_json.toLocaleString();
                    // coin mrktcap
                    mrktcap = document.getElementById("coin-marketcap");
                    mrktcap.innerHTML = coin_mrktcap_json.toLocaleString();
                }
            }
        }
    }
    http.send();
}

window.onload = setInterval(coinInfo2, 2000);
