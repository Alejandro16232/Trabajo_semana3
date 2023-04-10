
function comprobar(){
    var numerocam = parseInt(document.getElementById("numerocam").value);
    var resultado = 0;
    var con1 = 1.09;
    var con2 = 4.07;
    var con3= 3.75;
    var con4 = 0.92;


    if(document.getElementById("Sol1").checked && document.getElementById("Dolar2").checked)
    {
        resultado = numerocam/con3;
        alert("El cambio de $"+numerocam+" soles a dolares es de: $"+resultado.toFixed(2));

    } 
    else if(document.getElementById("Sol1").checked && document.getElementById("Euro2").checked){
        resultado = numerocam/con2;
        alert("El cambio de $"+numerocam+" soles a Euros es de: $"+resultado.toFixed(2))

    } 

    else if(document.getElementById("Dolar1").checked && document.getElementById("Euro2").checked){
        resultado = numerocam*con4;
        alert("El cambio de $"+numerocam+" soles a Euros es de: $"+resultado.toFixed(2))

    } 

    else if(document.getElementById("Dolar1").checked && document.getElementById("Sol2").checked){
        resultado = numerocam*con3;
        alert("El cambio de $"+numerocam+" dolar(es) a Soles es de: $"+resultado.toFixed(2))

    } 

    else if(document.getElementById("Euro1").checked && document.getElementById("Dolar2").checked){
        resultado = numerocam*con1;
        alert("El cambio de $"+numerocam+" soles a Euros es de: $"+resultado.toFixed(2))

    }
    else if(document.getElementById("Euro1").checked && document.getElementById("Sol2").checked){
        resultado = numerocam*con2;
        alert("El cambio de $"+numerocam+" soles a Euros es de: $"+resultado.toFixed(2))

    }
    else{
        alert("Completar requerimientos")
    }
}



