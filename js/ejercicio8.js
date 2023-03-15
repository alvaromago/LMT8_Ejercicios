$num1 = Math.round(Math.random() * (50 - 1) + (1));
$max = $num1;
$num2 = Math.round(Math.random() * (50 - 1) + (1));
if($num2 > $max){
    $max = $num2;
}
let $num3 = Math.round(Math.random() * (50 - 1) + (1));
if($num3 > $max){
    $max = $num3;
}
let $num4 = Math.round(Math.random() * (50 - 1) + (1));
if($num4 > $max){
    $max = $num4;
}
let $num5 = Math.round(Math.random() * (50 - 1) + (1));
if($num5 > $max){
    $max = $num5;
}
document.write("<h3>Ejercicio 8</h3>")
document.write($num1 + "<br>");
document.write($num2 + "<br>");
document.write($num3 + "<br>");
document.write($num4 + "<br>");
document.write($num5 + "<br>");
document.write("El máximo es el " + $max);