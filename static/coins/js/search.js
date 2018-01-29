let search_input = document.getElementById('search-input');
search_input.addEventListener('keyup', search);

function search(){
    // declare variables
    let coin_row = document.querySelectorAll('#coin-row');
    let input_txt = search_input.value.toUpperCase();

    // loop through coin_rows
    for(let i = 0; i < coin_row.length; i++){
        let coin_name = coin_row[i].getElementsByTagName('span')[0];
        if(coin_name){
            if(coin_name.innerHTML.toUpperCase().indexOf(input_txt) > -1){
                coin_row[i].style.display = "";
            }else{
                coin_row[i].style.display = "none";
            }
        }
    }
}
