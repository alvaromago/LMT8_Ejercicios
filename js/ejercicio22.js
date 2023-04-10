let euros = document.getElementById("euros").value;
let bitcoins = document.getElementById("bitcoins").value;

document.getElementById("aceptar").onclick = function(){
    if (document.getElementById("bitcoins").value != null){
        console.log("Eso equivale a", (bitcoins*25950), "euros");
    }
    else if (document.getElementById("euros").value != null){
        console.log("Eso equivale a", (euros/25950), "bitcoin");
    }
}
