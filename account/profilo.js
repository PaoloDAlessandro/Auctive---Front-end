"use strict";

document.getElementById("clicked-profilo").onclick = function(){
    button_profilo();
}

function button_profilo(){
    if(document.getElementById("clicked-profilo").style.backgroundColor == "#C4C4C41A"){
        document.getElementById("clicked-profilo").style.backgroundColor = "#FAD643";
        document.getElementById("clicked-profilo").style.border = "1px solid black";
        document.getElementById("clicked-profilo").style.color = "black";

        document.getElementById("clicked-pagamento").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-pagamento").style.border = "none";
        document.getElementById("clicked-pagamento").style.color = "#C4C4C4";

        document.getElementById("clicked-record").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-record").style.border = "none";
        document.getElementById("clicked-record").style.color = "#C4C4C4";

        document.getElementById("clicked-prodotti").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-prodotti").style.border = "none";
        document.getElementById("clicked-prodotti").style.color = "#C4C4C4";
    }
};

document.getElementById("clicked-pagamento").onclick = function(){
    button_pagamento();
}

function button_pagamento(){
    if(document.getElementById("clicked-pagamento").style.backgroundColor == "#C4C4C41A"){
        document.getElementById("clicked-pagamento").style.backgroundColor = "#FAD643";
        document.getElementById("clicked-pagamento").style.border = "1px solid black";
        document.getElementById("clicked-pagamento").style.color = "black";

        document.getElementById("clicked-profilo").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-profilo").style.border = "none";
        document.getElementById("clicked-profilo").style.color = "#C4C4C4";

        document.getElementById("clicked-record").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-record").style.border = "none";
        document.getElementById("clicked-record").style.color = "#C4C4C4";

        document.getElementById("clicked-prodotti").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-prodotti").style.border = "none";
        document.getElementById("clicked-prodotti").style.color = "#C4C4C4";
    }
};

document.getElementById("clicked-record").onclick = function(){
    button_record();
}

function button_record(){
    if(document.getElementById("clicked-record").style.backgroundColor == "#C4C4C41A"){
        document.getElementById("clicked-record").style.backgroundColor = "#FAD643";
        document.getElementById("clicked-record").style.border = "1px solid black";
        document.getElementById("clicked-record").style.color = "black";

        document.getElementById("clicked-profilo").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-profilo").style.border = "none";
        document.getElementById("clicked-profilo").style.color = "#C4C4C4";

        document.getElementById("clicked-pagamento").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-pagamento").style.border = "none";
        document.getElementById("clicked-pagamento").style.color = "#C4C4C4";

        document.getElementById("clicked-prodotti").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-prodotti").style.border = "none";
        document.getElementById("clicked-prodotti").style.color = "#C4C4C4";
    }
};

document.getElementById("clicked-prodotti").onclick = function(){
    button_record();
}

function button_prodotti(){
    if(document.getElementById("clicked-prodotti").style.backgroundColor == "#C4C4C41A"){
        document.getElementById("clicked-prodotti").style.backgroundColor = "#FAD643";
        document.getElementById("clicked-prodotti").style.border = "1px solid black";
        document.getElementById("clicked-prodotti").style.color = "black";

        document.getElementById("clicked-profilo").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-profilo").style.border = "none";
        document.getElementById("clicked-profilo").style.color = "#C4C4C4";

        document.getElementById("clicked-pagamento").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-pagamento").style.border = "none";
        document.getElementById("clicked-pagamento").style.color = "#C4C4C4";

        document.getElementById("clicked-record").style.backgroundColor = "#C4C4C41A";
        document.getElementById("clicked-record").style.border = "none";
        document.getElementById("clicked-record").style.color = "#C4C4C4";
    }
};