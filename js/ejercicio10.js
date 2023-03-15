let numeros = [];
for(i = 0; i < 5; i++){
    numeros[i] = Math.round(Math.random() * (10 - 1) + (1));
}
document.write("<h3>Ejercicio 10</h3>")
for(i = 0; i < numeros.length; i++){
    document.write(numeros[i] + "<br>");
}