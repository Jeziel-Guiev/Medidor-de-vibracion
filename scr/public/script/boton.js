window.onload= function(){
    document.getElementById("boton").addEventListener("click", sumar)
}


function sumar(){
    var suma1=document.getElementById("numero1").value;
    var suma2=document.getElementById("numero2").value;
    var res=parseInt(suma1)+parseInt(suma2);

    document.getElementById('resultado');


    resultado.innerHTML = res;
}