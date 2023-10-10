var nombre=prompt('Escribe tu nombre aqui abajo');
alert('Hola '+ nombre);



var color_bot=document.getElementsByTagName('a');


function mostrar(bloque){
	var caja=document.getElementById(bloque);
	caja.style.display='block';
}
function ocultar(bloque){
	var caja_off=document.getElementById(bloque);
	caja_off.style.display='none';
}
