document.addEventListener('DOMContentLoaded', () => {
    // 1. LÓGICA DE LOS BOTONES DE LA RADIO
    const btnRelato = document.getElementById('btn-relato');
    const btnSeleccion = document.getElementById('btn-seleccion');
    
    const infoRelato = document.getElementById('info-relato');
    const infoSeleccion = document.getElementById('info-seleccion');

    // Asegurarnos de que arranquen ocultos si el CSS no lo hace
    if (infoRelato) infoRelato.style.display = 'none';
    if (infoSeleccion) infoSeleccion.style.display = 'none';

    if (btnRelato && infoRelato) {
        btnRelato.addEventListener('click', () => {
            // Alterna la visibilidad del texto de relato y oculta el otro
            if (infoRelato.style.display === 'none' || infoRelato.style.display === '') {
                infoRelato.style.display = 'block';
                if (infoSeleccion) infoSeleccion.style.display = 'none';
            } else {
                infoRelato.style.display = 'none';
            }
        });
    }

    if (btnSeleccion && infoSeleccion) {
        btnSeleccion.addEventListener('click', () => {
            // Alterna la visibilidad del texto de selección y oculta el otro
            if (infoSeleccion.style.display === 'none' || infoSeleccion.style.display === '') {
                infoSeleccion.style.display = 'block';
                if (infoRelato) infoRelato.style.display = 'none';
            } else {
                infoSeleccion.style.display = 'none';
            }
        });
    }

    // 2. LÓGICA DEL BALÓN VOLADOR EN PARÁBOLA (CAMBIO DE PÁGINA)
    const balonDisparo = document.getElementById('balon-disparo');

    if (balonDisparo) {
        balonDisparo.addEventListener('click', () => {
            // Añade la clase que activa la animación CSS de la parábola
            balonDisparo.classList.add('volando');
            
            // Espera a que termine la animación (750ms) y redirige a la siguiente página
            setTimeout(() => {
                // Reemplaza 'siguiente-pagina.html' con el nombre de tu siguiente archivo HTML
                window.location.href = 'siguiente-pagina.html'; 
            }, 750);
        });
    }
});
