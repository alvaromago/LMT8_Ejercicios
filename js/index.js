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

document.write("<p>Primer texto escrito en JavaScript</p>")
document.write("<p>El resultado de y por z es: " + x + "</p>");

suma(y, z); // El orden de ejecución puede importar dependiendo las variables que se declaren en las funciones
resta();

$var1 = 4;
$var2 = "7";
document.write("<p>La variable $var1 es de tipo: " + typeof($var1) + "</p>") // type = number
document.write("<p>La variable $var2 es de tipo: " + typeof($var2) + "</p>") // type = string
document.write($var1 + ($var2) + "<br>"); // 47
document.write($var1 + parseInt($var2)); // 11

$var3 = 8;
$var4 = 0;
document.write("<p>" + $var3 / $var4 + "</p>"); // Infinity

$var5 = suma($var1, parseInt($var2));
$var6 = resta($var4, $var1);
document.write("<table border='1'><tr><td>Suma</td><td>Resta</td></tr>");
document.write("<tr><td align='center'>" + $var5 + "</td><td align='center'>" + $var6 + "</td></tr></table>");

if(multiplo3(8)){ // Si devuelve true
    document.write("<p>El número es múltiplo de tres</p>")
}
else{
    document.write("<p>El múltiplo no es número de tres</p>")
}

// Arrays

let $array1 = new Array(); // Vacío
let $array2 = new Array(3); // Vacío con tamaño
let $array3 = new Array("Audi", "BMW", "Peugeot", "Ford"); // Creación con valores
let $array4 = []; // Vacío

$array2[1] = 33; // Le doy valor en la posición 1
$array2.push(80); // Añado al final del array el valor 80

$array1[5] = 5 // Al estar vacío crea hasta la posición 5 dejando 0-4 undefined

for (i=0; i < $array2.length; i++){
    document.writeln($array2[i]); // Imprimo el array
}

let $array5 = new Array(2); // Array bidimensional
$array5[0] = new Array(2); // Dentro de la posición 0 creo otro array de tamaño 2
$array5[1] = new Array(2); // Dentro de la posición 1 creo otro array de tamaño 2
$array5[0][0] = 12; // Le doy valor en una posición

// Funciones Strings

let $cadena1 = "Esta es mi cadena";

$cadena1.toLowerCase(); // Todo en minúsculas
$cadena1.toUpperCase(); // Todo en mayúsculas
$cadena1.substring(3, 8); // Devuelve el texto entre estas posiciones incluyendo el primer valor y excluyendo el último
$cadena1.indexOf("i"); // Posición de la primera i de la cadena
$cadena1.lastIndexOf("a"); // Posición de la última a de la cadena
$cadena1.split(" "); // Caracter con el cuál cortara la cadena en el nuevo array

// Funciones

function suma($param1, $param2){
    $suma = $param1 + $param2;
    document.write("<p>La suma de y más z es: " + $suma);
    resta($param1*2, $param2*3);
    return $suma;
}

function resta(){
    $resta = y - z;
    document.write("<p>La resta de y menos z es: " + $resta);
    return $resta;
}

function multiplo3($param1){
    $esMultiplo = false;
    if($param1%3 == 0){
        $esMultiplo = true;
    }
    return $esMultiplo;
}