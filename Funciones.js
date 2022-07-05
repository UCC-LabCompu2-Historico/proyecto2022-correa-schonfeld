/**
 * Descripción: Dibujar y animar el canvas de avión, para el movimiento del mismo en nuestra página web.
 * @method dibujaravion y animarAvion
 * @parametro1  canvas
 * @parametro2  contexto
 * @parametro3  imagen
 * @return Valor que retorna: Animación del avión.
 */
function dibujaravion(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width =canvas.width;

    var img = new Image();
    img.src="imagenes/aviondespegando.png";

    img.onload = function(){
        ctx.drawImage(img,0,0);
    }

}


x=0;
dx=2;
function animarAvion(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    canvas.width = canvas.width;

    let letraorigen, letradestino;
    letraorigen = localStorage.getItem("salidaLS");
    letradestino = localStorage.getItem("llegadaLS");

    ctx.font="15pt Verdana";
    ctx.fillStyle = "black";
    ctx.fillText( "Avión con origen " + letraorigen + " y destino a " + letradestino, canvas.width/2, canvas.height-20);


    //dibujar fondo
    var img = new Image();
    img.src = "imagenes/aviondespegando.png";

    img.onload = function(){
        ctx.drawImage(img,x,60);
    }

    if (x>canvas.width){
        x=0;
    }
    x+=dx;
}

/**
 * Descripción: Guardar y cargar los datos del pasajero para tenerlos disponibles y utilizarlos en el momento que haga falta.
 * @method guardarLocalStorage y cargarLocalStorage
 * @parametros Los datos que ingreso el pasajero en el primer formulario.
 * @return Valor que retorna: El resumen del pasajero.
 */

function guardarLocalStorage(){
    let nom, ape, correo, clave, salida, llegada, partida, regreso;
    nom = document.getElementById("nombre").value;
    ape = document.getElementById("apellido").value;
    correo = document.getElementById("email").value;
    clave = document.getElementById("ClaveUCC").value;
    salida = document.getElementById("origen").value;
    llegada = document.getElementById("destino").value;
    partida = document.getElementById("fechapartida").value;
    regreso = document.getElementById("fechasalida").value;
    localStorage.setItem("nombreLS", nom);
    localStorage.setItem("apellidoLS", ape);
    localStorage.setItem("correoLS", correo);
    localStorage.setItem("claveLS", clave);
    localStorage.setItem("salidaLS", salida);
    localStorage.setItem("llegadaLS", llegada);
    localStorage.setItem("partidaLS", partida);
    localStorage.setItem("regresoLS", regreso);

    window.open('Resumen.html')

}

 function cargarLocalStorage(){

    let  no, ap, co, cla, sal, lleg, part, regr;
    no = localStorage.getItem("nombreLS");
    ap = localStorage.getItem("apellidoLS");
    co = localStorage.getItem("correoLS");
    cla = localStorage.getItem("claveLS");
    sal = localStorage.getItem("salidaLS");
    lleg = localStorage.getItem("llegadaLS");
    part = localStorage.getItem("partidaLS");
    regr = localStorage.getItem("regresoLS");

    document.getElementById("nom").value = no;
    document.getElementById("ape").value = ap;
    document.getElementById("correo").value = co;
    document.getElementById("clave").value = cla;
    document.getElementById("salida").value = sal;
    document.getElementById("llegada").value = lleg;
    document.getElementById("partida").value = part;
    document.getElementById("regreso").value = regr;
}

