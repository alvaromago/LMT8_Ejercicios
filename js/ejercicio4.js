let $max = 6;
let $min = 1;
function tirada ($min, $max){
    $num = Math.round(Math.random() * ($max - $min) + $min);
    return $num;
}
document.write("<h3>Ejercicio 4</h3>")
document.write("<p>Tirada: " + tirada($min, $max) + "</p>")