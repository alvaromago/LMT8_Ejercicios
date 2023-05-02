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