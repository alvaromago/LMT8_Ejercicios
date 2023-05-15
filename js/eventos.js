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
    let nombre = document.getElementById("nombre");
    let parrafos = document.getElementsByTagName("p");
    alert("El texto introducido es " + parrafos[1].textContent); // nombre.value
}

function limpiar(){
    alert("Se ha ejecutado el limpiar");
}

function crearNodo(){
    let parrafo = document.createElement("p");
    let texto = document.createTextNode("Párrafo 4");
    parrafo.appendChild(texto);
    document.body.appendChild(parrafo);
}

function eliminarNodo(){
    let elemento_nombre = document.getElementById("nombre");
    elemento_nombre.parentNode.removeChild(elemento_nombre);
}

function mostrarNavegador(){
    console.log(navigator.appName);
    console.log(navigator.appVersion);
    console.log(navigator.platform);
    console.log(navigator.javaEnabled);
    console.log(navigator.cookieEnabled);

    console.log(screen.width);
    console.log(screen.height);
}