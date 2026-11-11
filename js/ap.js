
// 1. Buscar elementos del DOM
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");

// 2. Escuchar el evento submit del formulario
formulario.addEventListener("submit", function(event){

    event.preventDefault();

    // 3. Obtener el nombre ingresado
    const nombreUsuario = nombre.value;

    // 4. Mostrar mensaje de bienvenida
    mensaje.textContent = "Bienvenido a la clase " + nombreUsuario;

});
