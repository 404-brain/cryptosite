window.onload = function Json(){
    var http = new XMLHttpRequest();

    console.log(http);

    http.open('GET', 'coins/json.html', true)
    http.send()

}
