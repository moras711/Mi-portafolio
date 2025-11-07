// JavaScript para el menú hamburguesa
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navMobile = document.getElementById('navMobile');
            const closeMenu = document.getElementById('closeMenu');
            
            // Abrir menú al hacer clic en hamburguesa
            hamburger.addEventListener('click', function() {
                navMobile.classList.add('active');
            });
            
            // Cerrar menú al hacer clic en la X
            closeMenu.addEventListener('click', function() {
                navMobile.classList.remove('active');
            });
            
            // Cerrar menú al hacer clic en un enlace (en dispositivos móviles)
            const navLinks = document.querySelectorAll('.nav-mobile a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMobile.classList.remove('active');
                });
            });

            // Cerrar menú al hacer clic fuera de él
            document.addEventListener('click', function(event) {
                const isClickInsideNav = navMobile.contains(event.target);
                const isClickOnHamburger = hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickOnHamburger && navMobile.classList.contains('active')) {
                    navMobile.classList.remove('active');
                }
            });
        });