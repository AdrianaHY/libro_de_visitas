var comentarioModificado = document.getElementById("vistaAnterior");
var mensaje = document.getElementById("contenido");


function vistaPrevia(){

comentarioModificado.innerHTML = mensaje.value;
}

function textoGrande(){
  comentarioModificado.style.fontSize = "70px";
}

function textoMediano(){
  comentarioModificado.style.fontSize = "45px";
}

function textoChico(){
  comentarioModificado.style.fontSize = "30px";
}

function cambioColorTexto(){
  var pedirColorHex = prompt("Elige un color de fuente : ");
  pedirColorHex = "#" + pedirColorHex;
  document.getElementById("vistaAnterior").style.color = pedirColorHex;
}
function cambioColorFondo(){
  var pedirColorFondo = prompt("Elige un color de fondo : ");
  pedirColorFondo = "#" + pedirColorFondo;
  document.getElementById("vistaAnterior").style.backgroundColor = pedirColorFondo;
}
function alinearALaDerecha(){
  comentarioModificado.style.textAlign = "right";

}
function alinearALaIzquierda(){
  comentarioModificado.style.textAlign = "left";

}

function centrar(){
  comentarioModificado.style.textAlign = "center";

}
// function publicarComentario() {

//     var comentarioPublicado = document.getElementById("vistaAnterior").cloneNode(true);
//     var nuevosComentarios = document.getElementById("comentariosPublicados");
//     nuevosComentarios.insertBefore(comentarioPublicado, nuevosComentarios.firstChild);
//     var lineaSeparadora = document.createElement("hr");
//     nuevosComentarios.insertBefore(lineaSeparadora, nuevosComentarios.firstChild);
//     }

function publicarComentario() {


	var comentarioPublicado = document.getElementById("vistaAnterior").cloneNode(true);

	comentarioPublicado.removeAttribute("id");

	var nuevosComentarios = document.getElementById("comentariosPublicados");

	nuevosComentarios.insertBefore(comentarioPublicado, nuevosComentarios.firstChild);

	var lineaSeparadora = document.createElement("hr");

	nuevosComentarios.insertBefore(lineaSeparadora, nuevosComentarios.firstChild);

	document.getElementById("nuevosComentarios").value = "";

	}
