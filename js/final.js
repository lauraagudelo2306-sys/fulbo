const pantallas = document.querySelectorAll(".pantalla");
const flechas = document.querySelectorAll(".flecha-final");
const representaciones = document.querySelectorAll(".representacion-final");
const infos = document.querySelectorAll(".info-representacion");
const botonesCerrar = document.querySelectorAll(".cerrar-info");
const audioCierre = document.getElementById("audioCierre");

let pantallaActual = 0;


/* =========================
   CAMBIO DE PANTALLAS
========================= */

flechas.forEach((flecha) => {

    flecha.addEventListener("click", function () {

        if (pantallaActual >= pantallas.length - 1) {
            return;
        }

        pantallas[pantallaActual].classList.remove("activa");

        pantallaActual++;

        pantallas[pantallaActual].classList.add("activa");


        /* =========================
           AUDIO DEL CIERRE
        ========================= */

        if (
            pantallaActual === 1 &&
            audioCierre
        ) {
            audioCierre.currentTime = 0;
            audioCierre.play();
        }

    });

});


/* =========================
   ABRIR REPRESENTACIONES
========================= */

representaciones.forEach((representacion) => {

    representacion.addEventListener("click", function () {

        const nombre = representacion.dataset.representacion;

        const info = document.getElementById(`info-${nombre}`);

        if (info) {
            info.classList.add("abierta");
        }

    });

});


/* =========================
   CERRAR INFORMACIÓN
========================= */

botonesCerrar.forEach((boton) => {

    boton.addEventListener("click", function () {

        const info = boton.closest(".info-representacion");

        if (info) {
            info.classList.remove("abierta");
        }

    });

});