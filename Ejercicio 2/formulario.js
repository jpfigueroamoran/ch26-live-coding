var formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  var nombreInput = document.querySelector("#name");
  var edadInput = document.querySelector("#age");
  var nacionalidadSelect = document.querySelector("#nationality");

  var nombre = nombreInput.value;
  var edad = edadInput.value;

  var indiceNacionalidad = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[indiceNacionalidad].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  } else {
    nombreInput.classList.remove("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  } else {
    edadInput.classList.remove("error");
  }

  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
});

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var listaInvitados = document.querySelector("#lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");

  var spanNombre = document.createElement("span");
  spanNombre.textContent = "Nombre: " + nombre;

  var spanEdad = document.createElement("span");
  spanEdad.textContent = "Edad: " + edad;

  var spanNacionalidad = document.createElement("span");
  spanNacionalidad.textContent = "Nacionalidad: " + nacionalidad;

  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(spanEdad);
  elementoLista.appendChild(spanNacionalidad);

  listaInvitados.appendChild(elementoLista);

  // Agregar invitado debajo del encabezado "Lista de invitados"
  var h2ListaInvitados = document.querySelector("h2");
  listaInvitados.insertBefore(elementoLista, h2ListaInvitados.nextSibling);
}
