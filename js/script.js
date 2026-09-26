// ELEMENTOS
const boton = document.getElementById("comenzar");
const inicio = document.querySelector(".inicio");
const video = document.getElementById("partido");

const interferencia = document.getElementById("interferencia");
const pregunta = document.getElementById("pregunta");
const gol = document.getElementById("gol");

const sonidoInterferencia = document.getElementById("sonidoInterferencia");
const sonidoGol = document.getElementById("sonidoGol");

const cancha = document.getElementById("cancha");
const personaje = document.getElementById("personaje");

const saltar = document.getElementById("saltar");
const introduccion = document.getElementById("introduccion");

const continuarCroquis = document.getElementById("continuarCroquis");



// =========================
// INICIAR PARTIDO
// =========================

boton.addEventListener("click", function () {

    inicio.style.display = "none";

    video.style.display = "block";

    video.play();

});


// =========================
// CUANDO TERMINA EL VIDEO
// =========================

video.addEventListener("ended", function () {

    video.style.display = "none";

    // INTERFERENCIA
    interferencia.style.display = "block";

    sonidoInterferencia.currentTime = 0;
    sonidoInterferencia.play();


    // 4 segundos de interferencia
    setTimeout(function () {

        interferencia.style.display = "none";

        sonidoInterferencia.pause();
        sonidoInterferencia.currentTime = 0;


        // PREGUNTA
        pregunta.style.display = "block";


        // SONIDO DEL PÚBLICO
        sonidoGol.currentTime = 0;
        sonidoGol.play();


        // 4 segundos antes del gol
        setTimeout(function () {

            pregunta.style.display = "none";

            gol.style.display = "block";
            cancha.style.display = "block";

            mostrarJugadores();

        }, 4000);

    }, 4000);

});


// =========================
// MOSTRAR JUGADORES
// =========================

function mostrarJugadores() {

    const jugadores = document.querySelectorAll(".jugador");

    jugadores.forEach(function (jugador, indice) {

        setTimeout(function () {

            jugador.classList.add("visible");

        }, indice * 500);

    });


    // Aparece "pulsa"
    setTimeout(function () {

        document
            .querySelector(".jugador-5")
            .classList.add("llamar");

    }, 3500);

}


// =========================
// CLICK EN JUGADOR 5
// =========================

document
    .querySelector(".jugador-5")
    .addEventListener("click", function () {

        cancha.classList.add("salir");

        gol.style.opacity = "0";
        gol.style.transition = "opacity 0.5s ease";


        setTimeout(function () {

            personaje.classList.add("aparecer");


            setTimeout(function () {

                introduccion.classList.add("aparecer");

            }, 500);

        }, 1000);

    });


// =========================
// PASAR DE 03 A CROQUIS
// =========================

continuarCroquis.addEventListener("click", function () {

    window.location.href = "croquis.html";

});


// =========================
// SALTAR VIDEO
// =========================

saltar.addEventListener("click", function () {

    video.pause();

    video.style.display = "none";

    inicio.style.display = "none";

    interferencia.style.display = "none";

    pregunta.style.display = "none";

    sonidoInterferencia.pause();
    sonidoInterferencia.currentTime = 0;

    gol.style.display = "block";

    cancha.style.display = "block";

    mostrarJugadores();

});

puntosJugador.forEach(function (punto) {

    punto.addEventListener("click", function () {

        punto.classList.toggle("activo");

    });

});