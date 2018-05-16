let search_input = document.getElementById('search-input');
search_input.addEventListener('keyup', search);

let pagination = document.querySelector(".pagination");

// tables
const t1 = document.getElementById("table1");
const t2 = document.getElementById("table2");
const t3 = document.getElementById("table3");
const t4 = document.getElementById("table4");
const t5 = document.getElementById("table5");

function search(){

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
            // search by coin symbol
            }else if(coin_sym.innerHTML.toUpperCase().indexOf(input_txt) > -1){
                coin_row[i].style.display = "";
            }else{
                coin_row[i].style.display = "none";
            }
        }
    }
    // on search display all tables && hide pagination
    if(search_input.value.length === 0){
        pagination.style.visibility = "visible";
        t2.style.display = "none";
        t2.setAttribute('id', 'table2');
        t3.style.display = "none";
        t3.setAttribute('id', 'table3');
        t4.style.display = "none";
        t4.setAttribute('id', 'table4');
        t5.style.display = "none";
        t5.setAttribute('id', 'table5');
    }else if(search_input.value.length >= 1){
        pagination.style.visibility = "hidden";
        t2.style.display = "";
        t2.setAttribute('id', 'table1');
        t3.style.display = "";
        t3.setAttribute('id', 'table1');
        t4.style.display = "";
        t4.setAttribute('id', 'table1');
        t5.style.display = "";
        t5.setAttribute('id', 'table1');
    }
}
