document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menú Hamburguesa Móvil ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Carrusel de Imágenes ---
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slides = document.querySelectorAll('.carousel-slide');
    
    // Ancho de desplazamiento
    let scrollAmount = 0;
    
    nextBtn.addEventListener('click', () => {
        const slideWidth = slides[0].clientWidth;
        const trackWidth = track.scrollWidth;
        const containerWidth = track.clientWidth;

        // Si no hemos llegado al final
        if (scrollAmount < (trackWidth - containerWidth)) {
            scrollAmount += slideWidth;
            track.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            // Volver al inicio (loop)
            scrollAmount = 0;
            track.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        const slideWidth = slides[0].clientWidth;

        if (scrollAmount > 0) {
            scrollAmount -= slideWidth;
            track.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});