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
//    var = margen = 10;


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
