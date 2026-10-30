
document.addEventListener("DOMContentLoaded", function() {

    // EJEMPLO 1: CAMBIAR TEXTO

    const botonCambiar = document.getElementById("botonCambiar");

    botonCambiar.addEventListener("click", function() {

        const mensaje = document.getElementById("mensaje");

        mensaje.textContent =
            "¡Excelente! JavaScript modificó el texto mediante el DOM.";

    });


    // EJEMPLO 2: MOSTRAR SALUDO

    const botonSaludar = document.getElementById("botonSaludar");

    botonSaludar.addEventListener("click", function() {

        const nombre = document.getElementById("nombre").value.trim();

        const resultado = document.getElementById("resultado");

        if (nombre === "") {

            resultado.textContent = "Por favor, escribe tu nombre.";

        } else {

            resultado.textContent =
                "¡Hola, " + nombre + "! Bienvenido al mundo del DOM.";

        }

    });

});
