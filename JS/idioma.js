// --- CAMBIO DE IDIOMA ---
const languageToggle = document.getElementById('language-toggle');
let currentLanguage = 'es'; // español por defecto

const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre mí',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        'hero-title': 'Mi<br><span>Portafolio</span>',
        'hero-subtitle': 'Entre pixeles, colores y sueños',
        'hero-btn': 'Descubrir',
        'hero-btn2': 'download',
        'hero-aboutme': '¿Quién <br><span>Es esta</span><br>Chica?',
        'p-aboutme': '¡Hola! Soy Angelly Mora Sánchez, y soy diseñadora y programadora web. Me apasiona transformar ideas en experiencias digitales. Me especializo en diseñar interfaces limpias, elegantes y con personalidad, y disfruto darles vida a través del código para que sean accesibles y memorables. Te invito a ver mi video para que me conozcas un poquito más',
        'btn-aboutme': 'Ver mi video',
        'hero-proyects': 'P <br> R <br> O <br> Y <br> E <br> C <br> T <br> O <br> S',
        'p-proone':'La ruta del café es un sitio web el cual muestra un maratón de ciclismo creado en la Zona delos Santos,con 3 días de competencia y grandes desafíos. Muestra todo lo necesario para los participantes: paquetes, patrocinadores, entre muchas cosas más.',
        'p-protwo':' Devuelta al flow, así como lo dice su logo, es un sitio web donde nos devolvemos a la historia, vida y música de los genios y grandes artistas del hip hop, muestra su historia, su moda, sus culturas, sus bandas y el renacimiento de este estilo de vida legendaria. ',
        'p-protree':'Fit Force, es un sitio web creado para inspirar y atraer personas que quieran mejorar su fisico y su alma. Un gimnasio moderno y llamativo para personas que quieran transformar su mente, su cuerpo y su vida. Donde lo que los mueve es la disciplina, la constancia y el deseo de superación.',
        'p-profor':'Congreso de Cultivo de Café es una página creada en conjuto de mis compañeros de clase, con el objetivo de informar sobre dicho congreso que se iba a realizar, esto para que los participantes estuvieran al tanto de todo lo que se iba a realizar',
        'p-profive':'Echele miel una aplicación móvil sobre una ecommerce sobre unos emprendedores de miel,cuenta sus etiquetas llenas de amor familiar, y los diferentes productos creados a base de miel de abeja 100% pura.',
        'btn-pro1': 'Ver Sitio',
        'btn-pro2': 'Ver Sitio',
        'btn-pro3': 'Ver Sitio',
        'btn-pro4': 'Ver Sitio',
        'btn-pro5': 'Ver Sitio',
        'hero-cer':'Certificaciones',
        'hero-skills':'Habilidades De Software',
        'hero-services':'Servicios',
        'h3-services1':'Diseño & Branding',
        'p-services1':'Creación de logotipos e identidad visual, manual de marca (lineamientos de uso de logo, paleta de colores, tipografías, estilo visual), papelería corporativa (tarjetas, sobres, facturas, plantillas), diseño de empaques y etiquetas y rediseño y modernización de marca. Asesoría en branding digital.',
        'h3-services2':' Web & Digital',
        'p-services2':'Diseño y desarrollo web responsivo, diseño UX/UI para apps y sitios, landing pages optimizadas para campañas y mantenimiento y actualización de sitios web.',
        'p-descarga':'Mi curriculum lo puedes encontrar por <a href="#" class="descargar">aquí</a>',
        'hero-contact':'Contáctame a través del siguiente formulario y <br> me comunicaré contigo tan pronto como <br> pueda.',
        'email':'Correo Electronico',
        'p-email':'angempubli@gmail.com',
        'telefono':'+506 86796081',
        'p-redes':'Redes Sociales',
        'input-name':'Nombre:',
        'input-phone':'Teléfono:',
        'input-email':'Correo Eléctronico',
        'input-msj':'Mensaje:',
        'btn-contact': 'Contáctame',
        'hero-des':'Descarga',
        'p-des':'Mi curriculum',
        'hero-nave':'Naviga',
        'p-n1':'Inicio',
        'p-n2':'Sobre mi',
        'p-n3':'Proyecos',
        'p-n4':'Herramientas',
        'p-n5':'Contacto',
        'p-footer':'© Todos los derechos reservados Diseñada y programada por Angelly Mora Sánchez'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-title': 'My<br><span>Portfolio</span>',
        'hero-subtitle': 'Between pixels, colors and dreams',
        'hero-btn': 'Discover',
        'hero-btn2': 'download',
        'hero-aboutme': 'Who<br><span>Is this</span><br>Girl?',
        'p-aboutme': 'Hello! I am Angelly Mora Sánchez, and I am a web designer and programmer. I am passionate transform ideas into digital experiences. I specialize in designing clean interfaces, elegant and with personality, and I enjoy giving them life through code so that they are accessible and memorable. I invite you to watch my video so you can get to know me a little more',
        'btn-aboutme': 'Watch my video',
        'hero-proyects': 'P<br>R<br>O<br>J<br>E<br>C<br>T<br>S',
        'p-proone': 'The coffee route is a website which shows a cycling marathon created in the Zona de los Santos, with 3 days of competition and great challenges. Show everything necessary for participants: packages, sponsors, among many other things.',
        'p-protwo':'Back to the flow, just as its logo says, it is a website where we return to the history, life and music of the geniuses and great artists of hip hop, shows their history, its fashion, its cultures, its bands and the rebirth of this legendary lifestyle.',
        'p-protree':'Fit Force is a website created to inspire and attract people who want to improve their physique and their soul. A modern and striking gym for people who want to transform their mind, their body and their life. Where what moves them is discipline, perseverance and the desire to improve.',
        'p-profor':'Coffee Growing Congress is a page created jointly with my classmates, with the aim of informing about the congress that was going to be held, so that the participants were aware of everything that was going to take place.',
        'btn-pro1': 'See site',
        'btn-pro2': 'See site',
        'btn-pro3': 'See site',
        'btn-pro4': 'See site',
        'btn-pro5': 'See site',
        'p-profive':'Add honey to a mobile application about an ecommerce about honey entrepreneurs, counts its labels full of family love, and the different products created based on 100% pure bee honey.',
        'hero-cer':'Certifications',
        'hero-skills':'Software Skills',
        'hero-services':'Services',
        'h3-services1':'Design & Branding',
        'p-services1':'Creation of logos and visual identity, brand manual (logo usage guidelines, color palette, fonts, visual style), corporate stationery (cards, envelopes, invoices, templates), packaging and label design and brand redesign and modernization. Digital branding advice.',
        'h3-services2':'Web & Digital',
        'p-services2':'Wireframes and functional structures for websites or apps, design of modern and responsive interfaces (adapted to any device). Creation of landing pages for campaigns or launches. Optimization of UX/UI design focused on user experience. Programming interactive web applications, maintenance and updating of websites.',
        'p-descarga':'You can find my resume at <a href="#" class="download">here</a> ',
        'hero-contact':'Contact me through the form below and I will get back to you as soon as I possible.<br> can.',
        'email':'Email',
        'p-email':'angempubli@gmail.com',
        'telefono':'Phone',
        'p-redes':'Social Media',
        'input-name':'Name:',
        'input-phone':'Phone:',
        'input-email':'Email:',
        'input-msj':'Mensaje:',
        'btn-contact': 'Contact Me',
        'hero-des':'Download',
        'p-des':'My resume',
        'hero-nave':'Navigate',
        'p-n1':'Home',
        'p-n2':'About me',
        'p-n3':'Projects',
        'p-n4':'Tools',
        'p-n5':'Contact',
        'p-footer':'© All rights reserved Designed and programmed by Angelly Mora Sánchez'
    }
};

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    document.documentElement.setAttribute('lang', currentLanguage);

    for (const id in translations[currentLanguage]) {
        const element = document.getElementById(id);
        if (element) {
            // Transición suave
            element.style.transition = 'opacity 0.3s ease';
            element.style.opacity = '0';
            setTimeout(() => {
                element.innerHTML = translations[currentLanguage][id];
                element.style.opacity = '1';
            }, 300);
        }
    }
});
