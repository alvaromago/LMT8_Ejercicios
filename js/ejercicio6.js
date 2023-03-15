$max = 10;
$min = 1;
$num = Math.round(Math.random() * ($max - $min) + ($min));
document.write("<h3>Ejercicio 6</h3>")
if($num%2==0){
    document.write("<p>El numero obtenido es el " + $num + " y es PAR</p>")
}
else{
    document.write("<p>El numero obtenido es el " + $num + " y es IMPAR</p>")
}