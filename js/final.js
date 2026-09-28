const titulo = document.querySelector(".titulo-final");
const textos = document.querySelectorAll(".texto-final p");

const representaciones =
    document.querySelectorAll(".representacion");

const ideaTexto =
    document.querySelector(".idea-final > p");

const fraseGrande =
    document.querySelector(".frase-grande");

const conclusion =
    document.querySelectorAll(".conclusion-final p");

const ultimoTexto =
    document.querySelectorAll(".ultimo-texto span");

const firma =
    document.querySelector(".firma-final");


/* =========================
   APARICIÓN AL ENTRAR
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        titulo.classList.add("visible");
    }, 300);

    textos.forEach((texto, indice) => {

        setTimeout(() => {
            texto.classList.add("visible");
        }, 900 + indice * 500);

    });

});


/* =========================
   APARICIÓN AL HACER SCROLL
========================= */

const elementos =
    document.querySelectorAll(
        ".representacion, .idea-final > p, .frase-grande, .conclusion-final p, .ultimo-texto span, .firma-final"
    );


const observador =
    new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.25
    });


elementos.forEach((elemento) => {

    observador.observe(elemento);

});