// Declare tables
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let table3 = document.getElementById("table3");
let table4 = document.getElementById("table4");
let table5 = document.getElementById("table5");
// li page
let pg1_li = document.getElementById("pg1");
let pg2_li = document.getElementById("pg2");
let pg3_li = document.getElementById("pg3");
let pg4_li = document.getElementById("pg4");
let pg5_li = document.getElementById("pg5");


if(pg1_li.className = "active-tab"){
    table1.style.display = "";
    table2.style.display = "none";
    table3.style.display = "none";
    table4.style.display = "none";
    table5.style.display = "none";
}


function showPage1(){
    //remove active color from other pages
    if(pg1_li.classList != "active-tab"){
    pg1_li.classList.remove("waves-effect");
    //remove active color from other pages
    pg2_li.classList.remove("active-tab");
    pg3_li.classList.remove("active-tab");
    pg4_li.classList.remove("active-tab");
    pg5_li.classList.remove("active-tab");
    // Add active color
    pg1_li.classList.add("active-tab");
    }

    table1.style.display = "";
    table2.style.display = "none";
    table3.style.display = "none";
    table4.style.display = "none";
    table5.style.display = "none";
}

function showPage2(){
    // Active color tab remove/add
    if(pg2_li.classList != "active-tab"){
        //remove active color from other pages
        pg1_li.classList.remove("active-tab");
        pg3_li.classList.remove("active-tab");
        pg4_li.classList.remove("active-tab");
        pg5_li.classList.remove("active-tab");
        // Add active color
        pg2_li.classList.add("active-tab");
    }

    table1.style.display = "none";
    table2.style.display = "";
    table3.style.display = "none";
    table4.style.display = "none";
    table5.style.display = "none";
}

function showPage3(){
    // Active color tab remove/add
    if(pg3_li.classList != "active-tab"){
        pg3_li.classList.remove("waves-effect");
        //remove active color from other pages
        pg1_li.classList.remove("active-tab");
        pg2_li.classList.remove("active-tab");
        pg4_li.classList.remove("active-tab");
        pg5_li.classList.remove("active-tab");
        // Add active color
        pg3_li.classList.add("active-tab");
    }

    table1.style.display = "none";
    table2.style.display = "none";
    table3.style.display = "";
    table4.style.display = "none";
    table5.style.display = "none";
}

function showPage4(){
    // Active color tab remove/add
    if(pg4_li.classList != "active-tab"){
        pg4_li.classList.remove("waves-effect");
        //remove active color from other pages
        pg1_li.classList.remove("active-tab");
        pg2_li.classList.remove("active-tab");
        pg3_li.classList.remove("active-tab");
        pg5_li.classList.remove("active-tab");
        // Add active color
        pg4_li.classList.add("active-tab");
    }

    table1.style.display = "none";
    table2.style.display = "none";
    table3.style.display = "none";
    table4.style.display = "";
    table5.style.display = "none";
}

function showPage5(){
    // Active color tab remove/add
    if(pg5_li.classList != "active-tab"){
        pg5_li.classList.remove("waves-effect");
        //remove active color from other pages
        pg1_li.classList.remove("active-tab");
        pg2_li.classList.remove("active-tab");
        pg3_li.classList.remove("active-tab");
        pg4_li.classList.remove("active-tab");
        // Add active color
        pg5_li.classList.add("active-tab");
    }

    table1.style.display = "none";
    table2.style.display = "none";
    table3.style.display = "none";
    table4.style.display = "none";
    table5.style.display = "";
}
