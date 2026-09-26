
const textoCroquis = document.querySelector(".intro-croquis");
const imagenCroquis = document.querySelector(".composicion-croquis");
const puntosJugador = document.querySelectorAll(".punto-jugador");
const textoPanagua = document.querySelector(".texto-panagua");
const textoBalon = document.querySelector(".texto-balon");

window.addEventListener("scroll", function () {

    const scroll = window.scrollY;
    textoPanagua.classList.remove("visible");

    if (scroll > 100) {

        textoCroquis.style.opacity = "0";

        imagenCroquis.style.transform = "translateX(-35%) scale(1.08)";

        setTimeout(function () {
            if (window.scrollY > 100) {
                puntosJugador.forEach(function (punto) {
                    punto.style.opacity = "1";
                });
            }
        }, 600);

   } else {

    textoCroquis.style.opacity = "1";

    imagenCroquis.style.transform = "translateX(0) scale(1)";

    puntosJugador.forEach(function (punto) {
        punto.style.opacity = "0";
    });


}

});

puntosJugador.forEach(function (punto) {

    punto.addEventListener("click", function () {

        punto.classList.toggle("activo");

        if (punto.classList.contains("punto-1")) {

            textoPanagua.classList.toggle("visible");

            puntosJugador.forEach(function (otroPunto) {

                if (otroPunto !== punto) {
                    otroPunto.style.opacity =
                        textoPanagua.classList.contains("visible") ? "0" : "1";
                }

            });

        }

        if (punto.classList.contains("punto-2")) {

            textoBalon.classList.toggle("visible");
            textoPanagua.classList.remove("visible");

            puntosJugador.forEach(function (otroPunto) {

                if (otroPunto !== punto) {
                    otroPunto.style.opacity =
                        textoBalon.classList.contains("visible") ? "0" : "1";
                }

            });
            otroPunto.classList.remove("activo");

        }

    });

});