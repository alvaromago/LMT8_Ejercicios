let $max = 6;
let $min = 1;

document.write("<h3>Ejercicio 4</h3>")
document.write("<p>Tirada: " + tirada($min, $max) + "</p>")

function tirada ($min, $max){
    $num = Math.ceil(Math.random() * 6);
    return $num;
}