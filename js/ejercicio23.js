sustituirVocales();

let timeout;
document.getElementById("cadenatxt").onkeyup = function(){
    if(timeout != undefined)clearTimeout
        clearTimeout(timeout);
        timeout = setTimeout(sustituirVocales, 50);
}

function sustituirVocales(){
    let cadenaOriginal = document.getElementById("cadenatxt").value;
    let cadenaMin = cadenaOriginal.toLowerCase();
    let cadenaSinVocalesa = cadenaMin.replaceAll("a", "*");
    let cadenaSinVocalese = cadenaSinVocalesa.replaceAll("e", "*");
    let cadenaSinVocalesi = cadenaSinVocalese.replaceAll("i", "*");
    let cadenaSinVocaleso = cadenaSinVocalesi.replaceAll("o", "*");
    let cadenaSinVocalesu = cadenaSinVocaleso.replaceAll("u", "*");

    let cadenaSinVocales = cadenaSinVocalesu;

    cadenatxt.value = cadenaSinVocales;
}