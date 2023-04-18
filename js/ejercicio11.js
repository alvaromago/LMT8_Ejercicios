document.write("<h3>Ejercicio 11</h3>")
let numeros1 = [];
let numeros2 = [];
let sumaNumeros = [];
for(i = 0; i < 10; i++){
    numeros1[i] = Math.round(Math.random() * 9 + 1);
    numeros2[i] = Math.round(Math.random() * 9 + 1);
    sumaNumeros[i] = numeros1[i] + numeros2[i];
    document.write(sumaNumeros[i] + "<br>");
}