console.log("Esta es una prueba desde eventos.js");

const ejemploUno = document.getElementById("btnEjemplo1");
console.log(ejemploUno);

ejemploUno.addEventListener("click", () => {
  alert("Has dado click al botón de la id btnEjemplo1");
  console.log("Has dado click al botón de la id btnEjemplo1");
});

/* ----------- */

const ejemploDos = document.getElementById("btnEjemplo2");
ejemploDos.addEventListener("mouseover", () => {
  alert("Has pasado el mouse por encima del botón de la id btnEjemplo2");
  console.log("Has pasado el mouse por encima del botón de la id btnEjemplo2");
});

/* ----------- */

const ejemploTres = document.getElementById("btnEjemplo3");
ejemploTres.addEventListener("dblclick", () => {
  alert("Has dado doble click al botón de la id btnEjemplo3");
  console.log("Has dado doble click al botón de la id btnEjemplo3");
});

/* ----------- */
const ejemploCuatro = document.getElementById("btnEjemplo4");
ejemploCuatro.addEventListener("keydown", () => {
  alert("Has dado click al botón de la id btnEjemplo4");
  console.log("Has dado click al botón de la id btnEjemplo4");
});

/*  Acá voy a manejar la lógica para manejar el formulario del HTML y
recuperar los datos y mostrarlos en el console */

const formulario = document.getElementById("formularioDeContacto");
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que se recargue la página al enviar el formulario

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  console.log("Nombre:", nombre);
  console.log("Correo:", correo);
  console.log("Mensaje:", mensaje);
});
