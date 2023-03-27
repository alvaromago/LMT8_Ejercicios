$palabra = "Ayuntamiento";
document.write("<h3>Ejercicio 14</h3>");
document.write("Analizando la palabra: " + $palabra + "<br>");
$vocalA = "a";
$vocalE = "e";
$vocalI = "i";
$vocalO = "o";
$vocalU = "u";
$numA = 0;
$numE = 0;
$numI = 0;
$numO = 0;
$numU = 0;
$palabraMinuscula = $palabra.toLowerCase()

for ($letra in $palabraMinuscula){
    if ($palabraMinuscula[$letra] == $vocalA){
        $numA += 1;
    }
    else if ($palabraMinuscula[$letra] == $vocalE){
        $numE += 1;
    }
    else if ($palabraMinuscula[$letra] == $vocalI){
        $numI += 1;
    }
    else if ($palabraMinuscula[$letra] == $vocalO){
        $numO += 1;
    }
    else if ($palabraMinuscula[$letra] == $vocalU){
        $numU += 1;
    }
}

document.write("La vocal a aparece en: " + $numA + "<br>");
document.write("La vocal e aparece en: " + $numE + "<br>");
document.write("La vocal i aparece en: " + $numI + "<br>");
document.write("La vocal o aparece en: " + $numO + "<br>");
document.write("La vocal u aparece en: " + $numU + "<br>");