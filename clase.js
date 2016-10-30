var ruta=window.location;
var btn=document.getElementById('btn');
console.log(btn);//te aparece el codigo html en la etiqueta
btn.addEventListener('click',lineas);

var lienzo=document.getElementById('lienzo'); //contexto en que vamos a dibujar 2D o 3D *webgl
var marco=lienzo.getContext('2d');

function paint(x1,y1,x2,y2){
  marco.beginPath();//va a iniciar una linea o va a dibujar una linea
  marco.strokeStyle="117, 56, 135"; // Stroke grueso de la linea y StrokeStyle el estilo de la linea
  marco.moveTo(x1,y1);
  marco.lineTo(x2,y2);
  marco.stroke(); //ya va a dibujarlo
  marco.closePath();//es como un cierra esa linea
}

function lineas(){
  i=0;
  while(i<400){
    paint(0,i,i,400);
    paint(400,i,i,0);
    i+=30;
  }

  x=400;
  y=0;
  while (x>0){
    paint(x,0,0,y);
    paint(400,y,x,400);
    x-=30;
    y+=30;
  }
}
