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