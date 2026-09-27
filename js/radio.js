document.addEventListener('DOMContentLoaded', () => {
    const btnRelato = document.getElementById('btn-relato');
    const btnSeleccion = document.getElementById('btn-seleccion');
    
    const infoRelato = document.getElementById('info-relato');
    const infoSeleccion = document.getElementById('info-seleccion');

    // Control del botón 1 (Perilla izquierda)
    if (btnRelato && infoRelato) {
        btnRelato.addEventListener('click', () => {
            infoRelato.classList.toggle('activo-texto');
            if (infoSeleccion) infoSeleccion.classList.remove('activo-texto');
        });
    }

    // Control del botón 2 (Perilla derecha)
    if (btnSeleccion && infoSeleccion) {
        btnSeleccion.addEventListener('click', () => {
            infoSeleccion.classList.toggle('activo-texto');
            if (infoRelato) infoRelato.classList.remove('activo-texto');
        });
    }

    // Balón pequeño para ir a datos.html
    const balonDisparo = document.getElementById('balon-disparo');
    const flechaSiguiente = document.getElementById('comenzar');

    if (balonDisparo) {
        balonDisparo.addEventListener('click', () => {
            if (balonDisparo.classList.contains('volando')) return;
            balonDisparo.classList.add('volando');
            
            setTimeout(() => {
                window.location.href = 'datos.html';
            }, 700);
        });
    }

    if (flechaSiguiente) {
        flechaSiguiente.addEventListener('click', () => {
            window.location.href = 'datos.html';
        });
    }
});
