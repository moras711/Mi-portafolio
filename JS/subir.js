const scrollTopBtn = document.getElementById('scroll-top');

// Mostrar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) { // aparece después de bajar 400px
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Subir suavemente al inicio
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
