function coinInfo(){

    var http = new XMLHttpRequest();
    http.open('GET', 'coin-price-info', true)

    http.onload = function(){
        // connection GOOD
        if(this.status == 200){

            // coin api json
            var coins_json = (JSON.parse(this.responseText));

            // All coin JSON info
            for(key in coins_json){
                var coin_price_json = coins_json[key]["USD"]["PRICE"];
                // coin symbol, example: btc, neo etc.
                var coin_symbol_json = coins_json[key]["USD"]["FROMSYMBOL"];
                var coin_mrktcap_json = coins_json[key]["USD"]["MKTCAP"];
                var coin_daypct_json = coins_json[key]["USD"]["CHANGEPCT24HOUR"];
                // coin row element
                var coin_row = document.querySelectorAll("#coin-row");

                // All coin rows
                for(var r = 0; r < coin_row.length; r++){
                    var coin_symbols = coin_row[r].querySelector("#coin-sym").innerHTML;
                    var coin_prices = coin_row[r].querySelector("#coin-price");
                     // All coin price elements
                    if(coin_symbols == coin_symbol_json){
                        var prices, vol, mrktcap, daypct;
                        prices = coin_row[r].querySelector("#coin-price").innerHTML = "$" + coin_price_json.toLocaleString();
                        mrktcap = coin_row[r].querySelector("#coin-marketcap").innerHTML = "$" + coin_mrktcap_json.toLocaleString();
                        daypct = coin_row[r].querySelector("#coin-day").innerHTML = coin_daypct_json.toFixed(2) + "%";
                        // Positive or Negative colors
                        if(daypct.innerHTML.includes("-")){
                            daypct.style.color = "red";
                        }else{
                            daypct.style.color = "green";
                        }
                    }
                }
            }
        }else{
            alert("There was a problem with the request!!!");
            return false;
        }
    }
    http.send();
}

window.onload = setInterval(coinInfo, 1000);
