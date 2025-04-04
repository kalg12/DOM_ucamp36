console.log("Esta es una prueba desde main.js");

const demo = document.getElementById("demostracion");
console.log(demo);

/*
En esta parte lo que haremos será crear la lógica para poder cambiarle
el valor del párrafo mediante un click en el botón.
*/

const parrafo = document.getElementById("parrafo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", () => {
  parrafo.textContent = "Este es un nuevo texto";
  alert(
    "Se ha cambiado el texto del párrafo, JS está por encima del HTML gracias al DOM"
  );
  console.log("Diste un click a un botón!!");
});

/*
Ahora vamos a añadir una funcionalidad para que aparezca un título de nuestro elemento
*/

const titulo = document.getElementById("titulo");
const btnAgregarTitulo = document.getElementById("btnAgregarTitulo");
const btnEliminarTitulo = document.getElementById("btnEliminarTitulo");

btnAgregarTitulo.addEventListener("click", () => {
  titulo.textContent = "Este es un nuevo título";
});

btnEliminarTitulo.addEventListener("click", () => {
  titulo.textContent = "";
});

/*
Ahora vamos a crear una funcionalidad para cambiarle el color a un título
*/

const tituloRojo = document.getElementById("tituloRojo");
const btnCambiarColor = document.getElementById("btnCambiarColor");

btnCambiarColor.addEventListener("click", () => {
  tituloRojo.style.color = "#0e11b6";
});

/* Vamos a cambiar el color de un texto mediante el estilo CSS con el metodo getElementsByClassName()	  */
const btnCambiarColorClase = document.getElementsByClassName("btnCambiante");
/* Al dar click este botón tiene que mostrar un alerta*/
btnCambiarColorClase.addEventListener("click", () => {
  alert("Has dado click al botón de la clase btnCambiante");
  console.log("Has dado click al botón de la clase btnCambiante");
});
