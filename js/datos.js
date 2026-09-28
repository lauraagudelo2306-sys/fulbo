const entradaDatos = document.getElementById("entrada-datos");
const flechaEntrada = document.getElementById("flecha-entrada");

const experienciaDatos = document.getElementById("experiencia-datos");
const tituloExperiencia = document.querySelector(".titulo-experiencia");

const infoTracking = document.getElementById("info-tracking");
const selectorDatos = document.getElementById("selector-datos");

const opcionesDato = document.querySelectorAll(".opcion-dato");

const explicacionDato = document.getElementById("explicacion-dato");
const tituloExplicacion = document.getElementById("titulo-explicacion");
const textoExplicacion = document.getElementById("texto-explicacion");

const preguntaLimite = document.getElementById("pregunta-limite");
const flechaLimite = document.getElementById("flecha-limite");

const fueraDatos = document.getElementById("fuera-datos");
const cierreDatos = document.getElementById("cierre-datos");

const flechaFinalDatos = document.getElementById("flecha-final-datos");

const jugadores = document.querySelectorAll(".jugador-dato");
const balon = document.getElementById("balon-dato");
const cancha = document.getElementById("cancha-datos");


/* ENTRADA */

flechaEntrada.addEventListener("click", () => {

    entradaDatos.classList.add("oculta");

    experienciaDatos.classList.add("visible");

    setTimeout(() => {
        tituloExperiencia.classList.add("visible");
    }, 300);

    setTimeout(() => {
        infoTracking.classList.add("visible");
    }, 1000);

    setTimeout(() => {
        selectorDatos.classList.add("visible");
    }, 1500);

});


/* EXPLICACIONES */

const explicaciones = {

    posicion: {
        titulo: "POSICIÓN",
        texto: "El sistema puede registrar dónde se encuentra cada jugador dentro de la cancha."
    },

    recorrido: {
        titulo: "RECORRIDO",
        texto: "Al registrar posiciones durante el tiempo, podemos reconstruir por dónde se desplazó cada jugador."
    },

    pases: {
        titulo: "PASES",
        texto: "Las relaciones entre jugadores pueden convertirse en conexiones y mostrar cómo circuló el balón."
    },

    zona: {
        titulo: "ZONA",
        texto: "Al agrupar las posiciones registradas, podemos identificar los espacios donde se concentró la acción."
    }

};


/* OPCIONES */

opcionesDato.forEach((boton) => {

    boton.addEventListener("click", () => {

        const modo = boton.dataset.modo;

        opcionesDato.forEach((otroBoton) => {
            otroBoton.classList.remove("activo");
        });

        boton.classList.add("activo");

        tituloExplicacion.textContent =
            explicaciones[modo].titulo;

        textoExplicacion.textContent =
            explicaciones[modo].texto;

        explicacionDato.classList.add("visible");

        activarModo(modo);

        preguntaLimite.classList.add("visible");

    });

});


/* ACTIVAR MODO */

function activarModo(modo) {

    limpiarRepresentacion();

    if (modo === "posicion") mostrarPosicion();

    if (modo === "recorrido") mostrarRecorrido();

    if (modo === "pases") mostrarPases();

    if (modo === "zona") mostrarZona();

}


/* LIMPIAR */

function limpiarRepresentacion() {

    jugadores.forEach((jugador) => {

        jugador.style.background = "#f3f1eb";
        jugador.style.transform = "scale(1)";
        jugador.style.boxShadow = "none";

    });

    balon.style.left = "43%";
    balon.style.top = "42%";

    document
        .querySelectorAll(".recorrido-jugador")
        .forEach((elemento) => elemento.remove());

    document
        .querySelectorAll(".conexion-pase")
        .forEach((elemento) => elemento.remove());

    document
        .querySelectorAll(".zona-actividad")
        .forEach((elemento) => elemento.remove());

}


/* POSICIÓN */

function mostrarPosicion() {

    jugadores.forEach((jugador, indice) => {

        setTimeout(() => {

            jugador.style.background = "#171717";
            jugador.style.transform = "scale(1.25)";

        }, indice * 100);

    });

}


/* RECORRIDO */

function mostrarRecorrido() {

    jugadores.forEach((jugador, indice) => {

        const recorrido =
            document.createElement("div");

        recorrido.className =
            "recorrido-jugador";

        const rect =
            jugador.getBoundingClientRect();

        const canchaRect =
            cancha.getBoundingClientRect();

        const x =
            rect.left - canchaRect.left;

        const y =
            rect.top - canchaRect.top;

        recorrido.style.left =
            `${x}px`;

        recorrido.style.top =
            `${y}px`;

        recorrido.style.width =
            `${45 + indice * 12}px`;

        recorrido.style.transform =
            `rotate(${indice % 2 === 0 ? -15 : 15}deg)`;

        recorrido.style.animationDelay =
            `${indice * 100}ms`;

        cancha.appendChild(recorrido);

    });

}


/* PASES */

function mostrarPases() {

    const conexiones = [

        ["jugador-1", "jugador-3"],
        ["jugador-3", "jugador-4"],
        ["jugador-4", "jugador-5"]

    ];

    conexiones.forEach((conexion, indice) => {

        const jugadorA =
            document.querySelector("." + conexion[0]);

        const jugadorB =
            document.querySelector("." + conexion[1]);

        const rectA =
            jugadorA.getBoundingClientRect();

        const rectB =
            jugadorB.getBoundingClientRect();

        const canchaRect =
            cancha.getBoundingClientRect();

        const x1 =
            rectA.left -
            canchaRect.left +
            rectA.width / 2;

        const y1 =
            rectA.top -
            canchaRect.top +
            rectA.height / 2;

        const x2 =
            rectB.left -
            canchaRect.left +
            rectB.width / 2;

        const y2 =
            rectB.top -
            canchaRect.top +
            rectB.height / 2;

        const distancia =
            Math.sqrt(
                Math.pow(x2 - x1, 2) +
                Math.pow(y2 - y1, 2)
            );

        const angulo =
            Math.atan2(
                y2 - y1,
                x2 - x1
            ) * 180 / Math.PI;

        const linea =
            document.createElement("div");

        linea.className =
            "conexion-pase";

        linea.style.left =
            `${x1}px`;

        linea.style.top =
            `${y1}px`;

        linea.style.width =
            `${distancia}px`;

        linea.style.transform =
            `rotate(${angulo}deg)`;

        linea.style.animationDelay =
            `${indice * 150}ms`;

        cancha.appendChild(linea);

    });

}


/* ZONA */

function mostrarZona() {

    const zonas = [

        {
            left: "30%",
            top: "28%",
            width: "150px",
            height: "120px"
        },

        {
            left: "46%",
            top: "38%",
            width: "190px",
            height: "130px"
        },

        {
            left: "60%",
            top: "25%",
            width: "120px",
            height: "150px"
        }

    ];

    zonas.forEach((zona, indice) => {

        const elemento =
            document.createElement("div");

        elemento.className =
            "zona-actividad";

        elemento.style.left =
            zona.left;

        elemento.style.top =
            zona.top;

        elemento.style.width =
            zona.width;

        elemento.style.height =
            zona.height;

        elemento.style.animationDelay =
            `${indice * 120}ms`;

        cancha.appendChild(elemento);

    });

}


/* QUÉ QUEDA POR FUERA */

flechaLimite.addEventListener("click", () => {

    experienciaDatos.classList.remove("visible");

    fueraDatos.classList.add("visible");

});


/* FINAL */

flechaFinalDatos.addEventListener("click", () => {

    window.location.href = "final.html";

});