window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
        nav.style.background = '#ffffffef';
    } else {
        nav.style.padding = '1rem 5%';
        nav.style.background = '#ffffff';
    }
});

// Animación simple de entrada para las tarjetas
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = '0.6s ease-out';
    observer.observe(card);
});