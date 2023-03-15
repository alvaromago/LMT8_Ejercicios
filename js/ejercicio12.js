let pares = [];
let i = 0;
for(let par = 0; i < 20; par+= 2){
    pares[i] = par;
    i++
}
document.write("<h3>Ejercicio 12</h3>")
for(i = 0; i < pares.length; i++){
    document.write(pares[i] + "<br>");
}