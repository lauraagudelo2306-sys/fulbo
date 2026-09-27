const textoCroquis = document.querySelector(".intro-croquis");
const imagenCroquis = document.querySelector(".composicion-croquis");
const puntosJugador = document.querySelectorAll(".punto-jugador");
const textoPanagua = document.querySelector(".texto-panagua");
const textoBalon = document.querySelector(".texto-balon");
const continuarCroquis = document.querySelector(".continuar-croquis");
const archivoContenedor = document.querySelector("#archivo-contenedor");


/* =========================
   SCROLL DEL CROQUIS
========================= */

window.addEventListener("scroll", function () {

    const scroll = window.scrollY;

    textoPanagua.classList.remove("visible");

    if (scroll > 100) {

        textoCroquis.style.opacity = "0";

        imagenCroquis.style.transform =
            "translateX(-35%) scale(1.08)";

        setTimeout(function () {

            if (window.scrollY > 100) {

                puntosJugador.forEach(function (punto) {
                    punto.style.opacity = "1";
                });

                setTimeout(function () {

                    if (window.scrollY > 100) {
                        continuarCroquis.classList.add("visible");
                    }

                }, 600);

            }

        }, 600);

    } else {

        textoCroquis.style.opacity = "1";

        imagenCroquis.style.transform =
            "translateX(0) scale(1)";

        puntosJugador.forEach(function (punto) {
            punto.style.opacity = "0";
        });

        continuarCroquis.classList.remove("visible");
    }

});


/* =========================
   PUNTOS INTERACTIVOS
========================= */

puntosJugador.forEach(function (punto) {

    punto.addEventListener("click", function () {

        punto.classList.toggle("activo");


        if (punto.classList.contains("punto-1")) {

            textoPanagua.classList.toggle("visible");

            puntosJugador.forEach(function (otroPunto) {

                if (otroPunto !== punto) {

                    otroPunto.style.opacity =
                        textoPanagua.classList.contains("visible")
                            ? "0"
                            : "1";

                    otroPunto.classList.remove("activo");
                }

            });

        }


        if (punto.classList.contains("punto-2")) {

            textoBalon.classList.toggle("visible");

            textoPanagua.classList.remove("visible");

            puntosJugador.forEach(function (otroPunto) {

                if (otroPunto !== punto) {

                    otroPunto.style.opacity =
                        textoBalon.classList.contains("visible")
                            ? "0"
                            : "1";

                    otroPunto.classList.remove("activo");
                }

            });

        }

    });

});


/* =========================
   ENTRAR AL ARCHIVO
========================= */

continuarCroquis.addEventListener("click", function () {

    archivoContenedor.innerHTML = `
    
        <section class="archivo-ramiro">

            <div class="archivo-etiqueta">
                ARCHIVO / RAMIRO CORRALES LUGO
            </div>

            <div class="libro">

                <!-- PÁGINAS DEL LIBRO -->

                <div class="libro-abierto">

                    <!-- DOBLE PÁGINA 1 -->

                    <div class="doble-pagina activa">

                        <div class="pagina-libro pagina-izquierda">

                            <div class="indicacion-pagina">
                                ACÁ VA TEXTO
                            </div>

                        </div>

                        <div class="pagina-libro pagina-derecha">

                            <div class="indicacion-pagina">
                                ACÁ VA IMAGEN
                            </div>

                            <div class="flecha-pagina">
                                →
                            </div>

                        </div>

                    </div>


                    <!-- DOBLE PÁGINA 2 -->

                    <div class="doble-pagina">

                        <div class="pagina-libro pagina-izquierda">

                            <div class="indicacion-pagina">
                                ACÁ VA IMAGEN
                            </div>

                        </div>

                        <div class="pagina-libro pagina-derecha">

                            <div class="indicacion-pagina">
                                ACÁ VA TEXTO + IMAGEN
                            </div>

                            <div class="flecha-pagina">
                                →
                            </div>

                        </div>

                    </div>


                    <!-- DOBLE PÁGINA 3 -->

                    <div class="doble-pagina">

                        <div class="pagina-libro pagina-izquierda">

                            <div class="indicacion-pagina">
                                ACÁ VA TEXTO
                            </div>

                        </div>

                        <div class="pagina-libro pagina-derecha">

                            <div class="indicacion-pagina">
                                ACÁ VA IMAGEN / CIERRE
                            </div>

                            <div class="flecha-cierre">
                                →
                            </div>

                        </div>

                    </div>

                </div>


                <!-- PORTADA -->

                <div class="portada-libro">

                    <div class="libro-numero">
                        01
                    </div>

                    <div class="libro-titulo">
                        RAMIRO<br>
                        CORRALES
                    </div>

                    <div class="libro-subtitulo">
                        ARCHIVO DE JUGADAS
                    </div>

                    <div class="libro-flecha">
                        →
                    </div>

                </div>

            </div>

        </section>

    `;

    archivoContenedor.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   INTERACCIÓN DEL LIBRO
========================= */

document.addEventListener("click", function (evento) {


    /* =========================
       ABRIR LIBRO
    ========================= */

    const portada = evento.target.closest(".portada-libro");

    if (portada) {

        const libro = portada.closest(".libro");

        libro.classList.add("abierto");

        return;
    }


    /* =========================
       PASAR PÁGINA
    ========================= */

    const flecha = evento.target.closest(".flecha-pagina");

    if (flecha) {

        const libro = flecha.closest(".libro");

        const paginas =
            libro.querySelectorAll(".doble-pagina");

        const paginaActual =
            libro.querySelector(".doble-pagina.activa");

        const indiceActual =
            Array.from(paginas).indexOf(paginaActual);

        const siguientePagina =
            paginas[indiceActual + 1];

        if (siguientePagina) {

            paginaActual.classList.remove("activa");

            siguientePagina.classList.add("activa");

        }

        return;
    }


    /* =========================
       CERRAR LIBRO
    ========================= */

    const flechaCierre =
        evento.target.closest(".flecha-cierre");

    if (flechaCierre) {

        const libro =
            flechaCierre.closest(".libro");

        libro.classList.add("cerrando");

        setTimeout(function () {

            libro.style.display = "none";

            const archivo =
                document.querySelector(".archivo-ramiro");

            archivo.insertAdjacentHTML("beforeend", `

                <div class="pregunta-siguiente">

                    <div class="pregunta-numero">
                        05
                    </div>

                    <h2>
                        ¿Y AHORA,<br>
                        CÓMO VOLVEMOS<br>
                        A LA JUGADA?
                    </h2>

                    <div class="seguir-siguiente">
                        →
                    </div>

                </div>

            `);

        }, 600);

        return;
    }
    const seguirSiguiente =
    evento.target.closest(".seguir-siguiente");

if (seguirSiguiente) {
    window.location.href = "radio.html";
    return;
}

});