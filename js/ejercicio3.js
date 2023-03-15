let $num = prompt("Dame un número entero");
let $res;
function doble ($num){
    $res = $num * 2;
    return $res;
}
document.write("<h3>Ejercicio 3</h3>")
document.write("<p>Doble: " + doble($num) + "</p>");