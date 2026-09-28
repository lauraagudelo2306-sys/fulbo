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


                <!-- =========================
                     PÁGINAS DEL LIBRO
                ========================= -->

                <div class="libro-abierto">


                    <!-- =========================
                         DOBLE PÁGINA 1
                         EL OFICIO
                    ========================= -->

                    <div class="doble-pagina activa">

                        <div class="pagina-libro pagina-izquierda">

                            <div class="numero-pagina">
                                01
                            </div>

                            <div class="titulo-pagina">
                                CUANDO EL PARTIDO<br>
                                NO SE PODÍA VER
                            </div>

                            <div class="texto-pagina">

                                Entre los años 60 y 80, muchos
                                aficionados seguían el fútbol
                                por la radio y esperaban al
                                periódico para volver a ver
                                las jugadas.

                                <br><br>

                                El dibujo era una forma de
                                llevar la cancha hasta la página.

                            </div>


                            <div class="firma-pagina">

                                RAMIRO CORRALES LUGO

                                <span>
                                    Dibujante de croquis deportivos
                                    para <em>El Tiempo</em>.
                                </span>

                            </div>

                        </div>


                        <div class="pagina-libro pagina-derecha">

                            <div class="foto-ramiro">

                                <img
                                    src="imagenes/ramiro.png"
                                    alt="Ramiro Corrales Lugo"
                                >

                            </div>


                            <div class="frase-pagina">

                                UNA JUGADA VISTA,<br>
                                RECORDADA<br>
                                Y DIBUJADA.

                            </div>


                            <div class="flecha-pagina">
                                →
                            </div>

                        </div>

                    </div>


                    <!-- =========================
                         DOBLE PÁGINA 2
                         REPRESENTACIÓN ÍNTIMA
                    ========================= -->

                    <div class="doble-pagina">

                        <div class="pagina-libro pagina-izquierda">

                            <div class="numero-pagina">
                                02
                            </div>


                            <div class="titulo-pagina">
                                NO SE DIBUJABA<br>
                                EL PARTIDO ENTERO.
                            </div>


                            <div class="texto-pagina">

                                Ramiro iba al partido,
                                observaba lo que ocurría
                                y escogía una jugada para
                                llevarla al papel.

                            </div>


                            <div class="proceso-pagina">

                                <span>OBSERVAR</span>
                                <span>→</span>
                                <span>SELECCIONAR</span>
                                <span>→</span>
                                <span>INTERPRETAR</span>
                                <span>→</span>
                                <span>DIBUJAR</span>

                            </div>


                            <div class="concepto-pagina">

                                <div class="concepto-titulo">
                                    REPRESENTACIÓN<br>
                                    DE DATOS ÍNTIMA
                                </div>

                                <div class="concepto-autor">
                                    LUPI & POSAVEC
                                </div>

                                <p>
                                    Una representación construida
                                    desde una experiencia particular:
                                    aquello que alguien observa,
                                    recuerda y decide registrar.
                                </p>

                            </div>

                        </div>


                        <div class="pagina-libro pagina-derecha">

                            <div class="numero-pagina">
                                CROQUIS / 03–0
                            </div>


                            <div class="croquis-libro">

                                <img
                                    src="imagenes/croquis3.jpg"
                                    alt="Croquis de una jugada de fútbol"
                                >

                            </div>


                            <div class="etiquetas-croquis">

                                <span>POSICIONES</span>
                                <span>MOVIMIENTO</span>
                                <span>BALÓN</span>
                                <span>MOMENTO CLAVE</span>

                            </div>


                            <div class="frase-croquis">

                                LO QUE RAMIRO VIO<br>
                                TERMINÓ CONVERTIDO EN ESTO.

                            </div>


                            <div class="flecha-pagina">
                                →
                            </div>

                        </div>

                    </div>


                    <!-- =========================
                         DOBLE PÁGINA 3
                         CONTRA EL RELOJ
                    ========================= -->

                    <div class="doble-pagina">

                        <div class="pagina-libro pagina-izquierda">

                            <div class="numero-pagina">
                                03
                            </div>


                            <div class="titulo-pagina">
                                TODO ESTO HABÍA QUE HACERLO<br>
                                A CONTRARRELOJ.
                            </div>


                            <div class="texto-pagina">

                                Plantillas de jugadores,
                                reglas con huecos para las
                                letras, tintas y un instrumento
                                de dibujo técnico conocido en
                                la familia como <strong>dingrafo</strong>.

                                <br><br>

                                Las herramientas permitían
                                repetir y ordenar los elementos
                                mientras se construía el croquis.

                            </div>


                            <div class="proceso-herramientas">

                                <span>PLANTILLA</span>
                                <span>→</span>
                                <span>POSICIÓN</span>
                                <span>→</span>
                                <span>TRAZO</span>
                                <span>→</span>
                                <span>CROQUIS</span>

                            </div>

                        </div>


                        <div class="pagina-libro pagina-derecha">

                            <div class="numero-pagina">
                                04
                            </div>


                            <div class="titulo-pagina">
                                PERO EL PARTIDO<br>
                                ERA MUCHO MÁS GRANDE.
                            </div>


                            <div class="texto-pagina">

                                El croquis guardaba una jugada,
                                no el partido completo.

                                <br><br>

                                Quedaban fuera el tiempo real,
                                el sonido, las emociones y las
                                acciones que no parecían centrales.

                            </div>


                            <div class="frase-final-libro">

                                DE TODO LO QUE PASÓ<br>
                                EN LA CANCHA,<br>
                                SOLO UNA PARTE<br>
                                LLEGÓ AL PAPEL.

                            </div>


                            <div class="flecha-cierre">
                                →
                            </div>

                        </div>

                    </div>

                </div>


                <!-- =========================
                     PORTADA
                ========================= -->

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

    const portada =
        evento.target.closest(".portada-libro");

    if (portada) {

        const libro =
            portada.closest(".libro");

        libro.classList.add("abierto");

        return;
    }


    /* =========================
       PASAR PÁGINA
    ========================= */

    const flecha =
        evento.target.closest(".flecha-pagina");

    if (flecha) {

        const libro =
            flecha.closest(".libro");

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


    /* =========================
       IR A RADIO
    ========================= */

    const seguirSiguiente =
        evento.target.closest(".seguir-siguiente");

    if (seguirSiguiente) {

        window.location.href = "radio.html";

        return;
    }

});