document.getElementById("aceptar").onclick = function(){
    let euros = document.getElementById("euros").value;
    let bitcoins = document.getElementById("bitcoins").value;
    let resultado = "";

    // 1€ = 0.000040 BTC
    // 1 BTC = 25950€

    if (euros && !bitcoins){
        resultado = euros * 0.000040;
        resultado = `El resultado de la conversión es: ${resultado} bitcoins`;
    }

    else if (!euros && bitcoins){
        resultado = bitcoins * 25950;
        resultado = `El resultado de la conversión es: ${resultado} euros`;
    }

    else{
        alert("Rellene únicamente un campo");
    }

    document.getElementById("resultado").innerHTML = resultado;
}

document.getElementById("limpiar").onclick = function(){
    document.getElementById("euros").value = "";
    document.getElementById("bitcoins").value = "";
}