window.addEventListener('load', contadorMensaje,true);

var valido = "no";
contadorV1 = 0;
contadorV2 = 0;

function disparo(jugador){
    if(valido == "si"){
        if(jugador == "v1"){
            document.getElementById('img-v2').src="v3.png";
            document.getElementById('img-v1').src="v1.png";
            //document.getElementById('v2').style.opacity = ".4";
            document.getElementById('v2').removeAttribute("onclick");
            document.getElementById('v2').removeAttribute("onclick");
            document.getElementById('marcador-v1').innerHTML += "x-";
            contadorV1++;
        }else{
            //document.getElementById('v1').style.opacity = ".4";
            document.getElementById('img-v1').src="v3.png";
            document.getElementById('img-v2').src="v1.png";
            document.getElementById('v1').removeAttribute("onclick");
            document.getElementById('v2').removeAttribute("onclick");
            document.getElementById('marcador-v2').innerHTML += "x-";
            contadorV2++;
        }
        //BOTON PARA JUGAR DE NUEVO 
        document.getElementById('mensaje').innerHTML= "<button onclick = 'reset(\""+jugador+"\")'> De nuevo</button>"
    }else{
        alert('Perdio el jugador ' + jugador + ' por disparar antes')
        document.getElementById(jugador).removeAttribute("onclick");
        document.getElementById(jugador).style.opacity=".4";
    }
}

function contadorMensaje(){
    mensaje = document.getElementById('mensaje');
    setTimeout(function(){
        mensaje.innerHTML="En sus marcas"
        setTimeout(function(){
            mensaje.innerHTML="Listos"
        tiempoRandom = Math.floor((Math.random() * 10) + 1);
        tiempoRandom = tiempoRandom + '000';
        setTimeout(function(){
            mensaje.innerHTML="Fuera"
            valido = "si";
        },tiempoRandom);
        },1000);
    },1000);
}

function reset(jugador){
    if(jugador == "v1"){
            document.getElementById('v2').style.opacity = "1";
            document.getElementById('v2').setAttribute("onclick","disparo('v2')");
            document.getElementById('v1').setAttribute("onclick","disparo('v1')");
            document.getElementById('img-v2').src="v2.png";
            document.getElementById('img-v1').src="v2.png"; 

    }else{
            document.getElementById('v1').style.opacity = "1";
            document.getElementById('v1').setAttribute("onclick","disparo('v1')");
            document.getElementById('v2').setAttribute("onclick","disparo('v2')");
            document.getElementById('img-v1').src="v2.png";
            document.getElementById('img-v2').src="v2.png";
    }
    
    valido = "no";
    contadorMensaje();
}
