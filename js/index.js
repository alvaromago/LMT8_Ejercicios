// Esto es un comentario de una única línea

/* Esto es un comentario
de varias líneas */

// Las variables deben empezar por letra, _ o $
// Las variables distinguen entre mayúscula y minúscula
let y;
let x;
y=4;
z=7;
const b=2;
x=y*z;

document.write("<p>El resultado de y por z es: " + x + "</p>");

suma(); // El orden de ejecución puede importar dependiendo las variables que se declaren en las funciones
resta();

function suma(){
    $suma = y + z;
    document.write("<p>La suma de y más z es: " + $suma);
}

function resta(){
    $resta = y - z;
    document.write("<p>La resta de y menos z es: " + $resta);
}

$var1 = 4;
$var2 = "Hola";
document.write("<p>La variable $var1 es de tipo: " + typeof($var1) + "</p>") // type = number
document.write("<p>La variable $var2 es de tipo: " + typeof($var2) + "</p>") // type = string
document.write($var1 + $var2); // 4Hola

$var3 = 8;
$var4 = 0;
document.write("<p>" + $var3 / $var4 + "</p>"); // Infinity