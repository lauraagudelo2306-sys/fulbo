document.addEventListener('DOMContentLoaded', () => {
    // 1. LÓGICA DE LOS BOTONES DE LA RADIO
    const btnRelato = document.getElementById('btn-relato');
    const btnSeleccion = document.getElementById('btn-seleccion');
    
    const infoRelato = document.getElementById('info-relato');
    const infoSeleccion = document.getElementById('info-seleccion');

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

    // 2. LÓGICA DEL BALÓN QUE SE ESTRELLA Y VA A DATOS
    const balonDisparo = document.getElementById('balon-disparo');

    if (balonDisparo) {
        balonDisparo.addEventListener('click', () => {
            // Evita múltiples clics si ya está volando
            if (balonDisparo.classList.contains('volando')) return;
            
            balonDisparo.classList.add('volando');
            
            // Espera a que termine la animación de impacto (800ms) y cambia de página
            setTimeout(() => {
                window.location.href = 'datos.html'; // Cambia por el nombre exacto de tu siguiente página si es diferente
            }, 800);
        });
    }
});

