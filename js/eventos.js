document.getElementById("nombre");

function captura(tipo){
    console.log("Evento capturado: " + tipo);
}

function coordenadas(event){
    let x = event.clientX;
    let y = event.clientY;
    console.log("X: " + x + ", Y: " + y);
}

function pulsada(event){
    console.log("Tecla pulsada: " + String.fromCharCode(event.keyCode));
}

function cambiar(){
    console.log("El dato ha cambiado");
}

function envio(){
    alert("Se ha ejecutado el submit");
}

function limpiar(){
    alert("Se ha ejecutado el limpiar");
}