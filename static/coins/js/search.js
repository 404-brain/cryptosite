let search_input = document.getElementById('search-input');
let paginaton = document.querySelector(".paginaton");
search_input.addEventListener('input', search);

// tables
const t1 = document.getElementById("table1");
const t2 = document.getElementById("table2");
const t3 = document.getElementById("table3");
const t4 = document.getElementById("table4");
const t5 = document.getElementById("table5");


function search(){
    // declare variables
    let coin_row = document.querySelectorAll('#coin-row');
    let input_txt = search_input.value.toUpperCase();

    // loop through coin_rows
    for(let i = 0; i < coin_row.length; i++){
        let coin_name = coin_row[i].getElementsByTagName('span')[0];
        let coin_sym = coin_row[i].getElementsByTagName('span')[1];
        if(coin_name || coin_sym){
            // search by coin name
            if(coin_name.innerHTML.toUpperCase().indexOf(input_txt) > -1){
                coin_row[i].style.display = "";
                table2.id = "table1";
            // search by coin symbol
            }else if(coin_sym.innerHTML.toUpperCase().indexOf(input_txt) > -1){
                coin_row[i].style.display = "";
            }else{
                coin_row[i].style.display = "none";
            }
        }
    }
}
