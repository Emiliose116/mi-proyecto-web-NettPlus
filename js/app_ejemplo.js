console.log("JavaScript conectado correctamente");

const tarjeta = document.querySelector("#tarjeta");
const azul = document.querySelector("#azul");
const verde = document.querySelector("#verde");
const rojo = document.querySelector("#rojo");
const restablecer = document.querySelector("#restablecer");

console.log("Tarjeta:", tarjeta);
console.log("Azul:", azul);
console.log("Verde:", verde);
console.log("Rojo:", rojo);
console.log("Restablecer:", restablecer);
// 2. Cambiar el color a azul
azul.addEventListener("click", function(){

    tarjeta.style.backgroundColor = "blue";

});

// 3. Cambiar el color a verde
verde.addEventListener("click", function(){

    tarjeta.style.backgroundColor = "green";

});

// 4. Cambiar el color a rojo
rojo.addEventListener("click", function(){

    tarjeta.style.backgroundColor = "red";

});

// 5. Restablecer el color original
restablecer.addEventListener("click", function(){

    tarjeta.style.backgroundColor = "lightgray";

});
