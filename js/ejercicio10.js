document.write("<h3>Ejercicio 10</h3>")
let numeros = [];
for(i = 0; i < 5; i++){
    numeros[i] = Math.ceil(Math.random() * 10);
    document.write(numeros[i] + "<br>");
}
