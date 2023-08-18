let displayvalue="";
function inserirvalor(value){
    displayvalue+= value;
    document.getElementById("display").value=displayvalue;
} 


function apagar(value){
    displayvalue=" ";
    document.getElementById("display").value=" ";
} 
