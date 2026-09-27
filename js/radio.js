
document.addEventListener('DOMContentLoaded', () => {
    // 1. LÓGICA DE LOS BOTONES DE LA RADIO
    const btnRelato = document.getElementById('btn-relato');
    const btnSeleccion = document.getElementById('btn-seleccion');
    
    const infoRelato = document.getElementById('info-relato');
    const infoSeleccion = document.getElementById('info-seleccion');

    // Ocultar textos al cargar la página por seguridad
    if (infoRelato) infoRelato.style.display = 'none';
    if (infoSeleccion) infoSeleccion.style.display = 'none';

    if (btnRelato && infoRelato) {
        btnRelato.addEventListener('click', () => {
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
            // Activa la animación CSS de la parábola
            balonDisparo.classList.add('volando');
            
            // Espera a que termine la animación (0.75 segundos) y cambia de página
            setTimeout(() => {
                // REEMPLAZA 'siguiente-pagina.html' por el nombre real de tu archivo HTML siguiente
                window.location.href = 'siguiente-pagina.html'; 
            }, 750);
        });
    }
});
