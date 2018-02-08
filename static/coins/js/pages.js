// Declare pages
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let page4 = document.getElementById("page4");
let page5 = document.getElementById("page5");
// li page
let pg1_li = document.getElementById("pg1");

if(pg1_li.className = "active"){
    page1.style.display = "";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
}


function showPage1(){
    page1.style.display = "";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
}

function showPage2(){
    page1.style.display = "none";
    page2.style.display = "";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
}

function showPage3(){
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "";
    page4.style.display = "none";
    page5.style.display = "none";
}

function showPage4(){
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "";
    page5.style.display = "none";
}

function showPage5(){
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "";
}
