
// Botón para volver al inicio
var boton = document.getElementById("btnSubir");

if (boton) {
    // Mostrar el botón al bajar por la página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    });

    // Volver al inicio al hacer clic
    boton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

