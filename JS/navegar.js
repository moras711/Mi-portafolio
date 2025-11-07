document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(
        ".link-hero, .link-sobre-mi, .link-proyectos, .link-habilidades, .link-contacto"
    );

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Detectar clase y dirigir al bloque correspondiente
            let targetClass = "";
            if (link.classList.contains("link-hero")) targetClass = ".hero";
            else if (link.classList.contains("link-sobre-mi")) targetClass = ".sobre-mi";
            else if (link.classList.contains("link-proyectos")) targetClass = ".proyectos";
            else if (link.classList.contains("link-habilidades")) targetClass = ".habilidades";
            else if (link.classList.contains("link-contacto")) targetClass = ".contacto";

            const targetSection = document.querySelector(targetClass);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuste por el header
                    behavior: "smooth",
                });
            }
        });
    });
});