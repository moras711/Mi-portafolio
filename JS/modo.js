const toggleBtn = document.getElementById('theme-toggle');
        const icono = document.getElementById('icono-modo');
        const body = document.body;

        // Al cargar la página, verifica el modo guardado
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            icono.src = 'ASSETS/iconos/sol.svg'; // icono de sol
        } else {
            icono.src = 'ASSETS/iconos/oscuro.svg'; // icono de luna
        }

        // Al hacer clic, cambia de modo
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                icono.src = 'ASSETS/iconos/sol.svg'; // cambia a sol
                localStorage.setItem('theme', 'dark');
            } else {
                icono.src = 'ASSETS/iconos/oscuro.svg'; // cambia a luna
                localStorage.setItem('theme', 'light');
            }
        });