
document.addEventListener("DOMContentLoaded", () => {

    const btnRelato = document.getElementById("btn-relato");
    const btnSeleccion = document.getElementById("btn-seleccion");

    const audioRadio = document.getElementById("audio-radio");

    const audioInterferencia =
        document.getElementById("audio-interferencia");

    const frecuenciaRadio = document.getElementById("frecuencia-radio");
    const frecuenciaTexto = document.getElementById("frecuencia-texto");

    const reconstruccion =
        document.getElementById("reconstruccion-jugada");

    const secuencia =
        document.getElementById("secuencia-jugada");

    const pasoFaustino =
        document.getElementById("paso-faustino");

    const flecha1 =
        document.getElementById("flecha-1");

    const pasoAccion =
        document.getElementById("paso-accion");

    const flecha2 =
        document.getElementById("flecha-2");

    const pasoGol =
        document.getElementById("paso-gol");

    const textoFinal =
        document.getElementById("texto-radio-final");

    const tituloReconstruccion =
        document.querySelector(".titulo-reconstruccion");

    const contenedorRadio =
        document.querySelector(".contenedor-radio-perillas");


    let reproduciendo = false;
    let reconstruccionIniciada = false;
    let reconstruccionMostrada = false;


    /* =========================
       PERILLA IZQUIERDA
       SINTONIZAR
    ========================= */

    if (btnRelato) {

        btnRelato.addEventListener("click", () => {

            if (reproduciendo) return;

            reproduciendo = true;

            /* Detener interferencia */

            if (audioInterferencia) {
                audioInterferencia.pause();
                audioInterferencia.currentTime = 0;
            }

            /* Cerrar "lo que no se escucha" */

            const capaOmitida =
                document.getElementById("capa-omitida");

            if (capaOmitida) {
                capaOmitida.classList.remove("activo-omitido");
            }

            reconstruccionIniciada = false;
            reconstruccionMostrada = false;


            /* =========================
               RADIO VUELVE AL CENTRO
            ========================= */

            if (contenedorRadio) {
                contenedorRadio.classList.remove("mover-radio");
            }


            /* =========================
               RECUADRO VUELVE A OCULTARSE
            ========================= */

            if (reconstruccion) {
                reconstruccion.classList.remove("activa");
            }

            if (tituloReconstruccion) {
                tituloReconstruccion.classList.remove("activa");
            }


            /* =========================
               MOSTRAR FRECUENCIA
            ========================= */

            if (frecuenciaRadio) {
                frecuenciaRadio.style.display = "block";
            }


            /* =========================
               REINICIAR ELEMENTOS
            ========================= */

            if (secuencia) {
                secuencia.classList.remove("oculta");
            }

            if (textoFinal) {
                textoFinal.classList.remove("visible");
                textoFinal.style.display = "none";
            }

            if (pasoFaustino) {
                pasoFaustino.classList.remove("visible");
            }

            if (flecha1) {
                flecha1.classList.remove("visible");
            }

            if (pasoAccion) {
                pasoAccion.classList.remove("visible");
            }

            if (flecha2) {
                flecha2.classList.remove("visible");
            }

            if (pasoGol) {
                pasoGol.classList.remove("visible");
            }


            /* =========================
               REINICIAR AUDIO
            ========================= */

            audioRadio.currentTime = 0;

            audioRadio.play().catch(() => {
                console.log(
                    "El navegador bloqueó la reproducción."
                );
            });


            /* =========================
               FRECUENCIA INICIAL
            ========================= */

            if (frecuenciaTexto) {
                frecuenciaTexto.textContent =
                    "87.3 FM — ESTÁTICA";
            }

        });

    }


    /* =========================
       SINCRONIZAR CON EL AUDIO
    ========================= */

    if (audioRadio) {

        audioRadio.addEventListener("timeupdate", () => {

            const tiempo = audioRadio.currentTime;


            /* =========================
               0 — 4.5 s
            ========================= */

            if (tiempo < 4.5) {

                if (frecuenciaTexto) {
                    frecuenciaTexto.textContent =
                        "87.3 FM — ESTÁTICA";
                }

            }


            /* =========================
               4.5 — 7 s
               SEÑAL DÉBIL
            ========================= */

            else if (tiempo >= 4.5 && tiempo < 7) {

                if (frecuenciaTexto) {
                    frecuenciaTexto.textContent =
                        "91.7 FM — SEÑAL DÉBIL";
                }


                if (!reconstruccionMostrada) {

                    reconstruccionMostrada = true;


                    if (contenedorRadio) {
                        contenedorRadio.classList.add(
                            "mover-radio"
                        );
                    }


                    if (reconstruccion) {
                        reconstruccion.classList.add(
                            "activa"
                        );
                    }


                    if (tituloReconstruccion) {
                        tituloReconstruccion.classList.add(
                            "activa"
                        );
                    }

                }

            }


            /* =========================
               7 — 8 s
               COMIENZA LA NARRACIÓN
            ========================= */

            else if (tiempo >= 7 && tiempo < 8) {

                if (frecuenciaTexto) {
                    frecuenciaTexto.textContent =
                        "98.6 FM — TRANSMISIÓN ENCONTRADA";
                }

            }


            /* =========================
               8 — 11 s
               FAUSTINO
            ========================= */

            else if (tiempo >= 8 && tiempo < 11) {

                if (!reconstruccionIniciada) {
                    reconstruccionIniciada = true;
                }

                if (pasoFaustino) {
                    pasoFaustino.classList.add("visible");
                }

            }


            /* =========================
               11 — 14.4 s
               ACCIÓN
            ========================= */

            else if (tiempo >= 11 && tiempo < 14.4) {

                if (pasoFaustino) {
                    pasoFaustino.classList.add("visible");
                }

                if (flecha1) {
                    flecha1.classList.add("visible");
                }

                if (pasoAccion) {
                    pasoAccion.classList.add("visible");
                }

            }


            /* =========================
               14.4 — 18 s
               GOOOL
            ========================= */

            else if (tiempo >= 14.4 && tiempo < 18) {

                if (pasoFaustino) {
                    pasoFaustino.classList.add("visible");
                }

                if (flecha1) {
                    flecha1.classList.add("visible");
                }

                if (pasoAccion) {
                    pasoAccion.classList.add("visible");
                }

                if (flecha2) {
                    flecha2.classList.add("visible");
                }

                if (pasoGol) {
                    pasoGol.classList.add("visible");
                }

            }


            /* =========================
               18 s
               TERMINA TRANSMISIÓN
            ========================= */

            else if (tiempo >= 18) {

                if (frecuenciaTexto) {
                    frecuenciaTexto.textContent =
                        "98.6 FM — TRANSMISIÓN FINALIZADA";
                }


                if (secuencia) {
                    secuencia.classList.add("oculta");
                }


                if (
                    textoFinal &&
                    !textoFinal.classList.contains("visible")
                ) {

                    textoFinal.style.display = "block";

                    requestAnimationFrame(() => {
                        textoFinal.classList.add("visible");
                    });

                }

            }

        });


        /* =========================
           AUDIO TERMINADO
        ========================= */

        audioRadio.addEventListener("ended", () => {

            reproduciendo = false;

            if (frecuenciaTexto) {
                frecuenciaTexto.textContent =
                    "98.6 FM — TRANSMISIÓN FINALIZADA";
            }

        });

    }


    /* =========================
       PERILLA DERECHA
       LO QUE NO SE ESCUCHA
    ========================= */

    if (btnSeleccion) {

        btnSeleccion.addEventListener("click", () => {

            const capaOmitida =
                document.getElementById("capa-omitida");

            if (!capaOmitida) return;


            /* Detener transmisión */

            if (audioRadio) {
                audioRadio.pause();
            }

            reproduciendo = false;


            /* Radio se desplaza */

            if (contenedorRadio) {
                contenedorRadio.classList.add("mover-radio");
            }


            /* =========================
               INTERFERENCIA
            ========================= */

            if (audioInterferencia) {

                audioInterferencia.currentTime = 0;

                audioInterferencia.play().catch(() => {
                    console.log(
                        "El navegador bloqueó la reproducción."
                    );
                });

            }


            /* =========================
               CERRAR RECONSTRUCCIÓN
            ========================= */

            if (reconstruccion) {
                reconstruccion.classList.remove("activa");
            }

            if (tituloReconstruccion) {
                tituloReconstruccion.classList.remove("activa");
            }


            /* =========================
               MOSTRAR LO QUE NO SE ESCUCHA
            ========================= */

            capaOmitida.classList.toggle(
                "activo-omitido"
            );

        });

    }

});
