
//Declaro varibales globales en donde se obtienen los datos registrados en el área de texto y en la vista previa
//de este modo se podrán ocupar en todas las funciones
var comentarioModificado = document.getElementById("vistaAnterior");
var mensaje = document.getElementById("contenido");

//En ésta función duplico lo que se escribe en el área de texto con lo que se va viendo abajo y lo que se modifica
function vistaPrevia(){

comentarioModificado.innerHTML = mensaje.value;
}
//function crarPreview (input){
//console.log(input)
//} para html =  function(this.value) agarra el valor deseado del objeto

//Para hacer el texto grande
function textoGrande(){
  comentarioModificado.style.fontSize = "70px";
}
//Para hacer el texto mediano
function textoMediano(){
  comentarioModificado.style.fontSize = "45px";
}
//Para hacer el texto más pequeño
function textoChico(){
  comentarioModificado.style.fontSize = "30px";
}

//Para cambio de color en la tipografía
function cambioColorTexto(){
  //En esta línea pedimos al usuario que elija el color en hexadecimal
  var pedirColorHex = prompt("Elige un color HEXADECIMAL de fuente : ");
  //Aquí igualamos la variable a lo que el usuario escribió, además agrego el "#" para que no sea necesario que el usuario lo ponga
  pedirColorHex = "#" + pedirColorHex;
  document.getElementById("vistaAnterior").style.color = pedirColorHex;
}

//Para pedir color para cambiar el fondo
function cambioColorFondo(){
  //En esta línea pedimos al usuario que elija el color en hexadecimal
  var pedirColorFondo = prompt("Elige un color HEXADECIMAL de fondo : ");
  //Aquí igualamos la variable a lo que el usuario escribió, además agrego el "#" para que no sea necesario que el usuario lo ponga
  pedirColorFondo = "#" + pedirColorFondo;
  document.getElementById("vistaAnterior").style.backgroundColor = pedirColorFondo;
}

//Para alinear el texto a la derecha
function alinearALaDerecha(){
  comentarioModificado.style.textAlign = "right";

}

//Para alinear el texto a la izquierda
function alinearALaIzquierda(){
  comentarioModificado.style.textAlign = "left";

}
//Para alinear el texto en el centro
function centrar(){
  comentarioModificado.style.textAlign = "center";

}

// ÉSTA NO FUNCIONÓ :(
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

function agregarImagen(){
  var imagenAgregar = prompt("Inserta la url de tu imagen");
  var imagen = document.createElement("img");
  var preview = document.getElementById("vistaAnterior")
  imagen.src = imagenAgregar;
  vistaAnterior.appendChild(imagen);
}

function agregarLista(){
  var numeroDeElementosEnLista = prompt("Indica el número de elementos:")
  var nuevaLista = document.createElement("ol");


  for(var i = 0; i < numeroDeElementosEnLista; i++){
    var valorNuevoItem = prompt("Agrega tu item:");
    var nuevoItem = document.createElement("li");
    nuevoItem.innerText = valorNuevoItem;
    nuevaLista.appendChild(nuevoItem);

  }

comentarioModificado.appendChild(nuevaLista);
//No pude hacerlo porque le borré el id :(
}

function borrarComentario(){

}

  function borrarVista(){
    comentarioModificado.innerHTML = "";
  }
