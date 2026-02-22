// Función para mostrar requisitos de servicios
function showRequirements(text) {
    alert(text);
}

// Scroll suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Validación simple del formulario
const form = document.querySelector('form');
form.addEventListener('submit', function() {
    console.log("Enviando formulario a Estuconta...");
});

// Lógica para los Acordeones de Servicios
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Alternar clase activa para el botón */
            this.classList.toggle("active");

            /* Controlar el panel de información */
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Alternar clase activa para el botón */
            this.classList.toggle("active");

            /* Controlar el panel de información */
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const qrIcon = document.querySelector('.qr-icon');
    const qrContent = document.querySelector('.qr-content');
    const closeBtn = document.querySelector('.close-qr');

    // Al hacer clic en el icono, muestra el QR
    qrIcon.addEventListener('click', function() {
        qrContent.style.display = (qrContent.style.display === 'block') ? 'none' : 'block';
    });

    // Botón para cerrar la tarjeta
    closeBtn.addEventListener('click', function() {
        qrContent.style.display = 'none';
    });

    // Mostrar el QR automáticamente después de 3 segundos para llamar la atención
    setTimeout(() => {
        qrContent.style.display = 'block';
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const qrIcon = document.querySelector('.qr-icon');
    const qrContent = document.querySelector('.qr-content');
    const closeBtn = document.querySelector('.close-qr');

    // Al hacer clic en el icono, muestra el QR
    qrIcon.addEventListener('click', function() {
        qrContent.style.display = (qrContent.style.display === 'block') ? 'none' : 'block';
    });

    // Botón para cerrar la tarjeta
    closeBtn.addEventListener('click', function() {
        qrContent.style.display = 'none';
    });

    // Mostrar el QR automáticamente después de 3 segundos para llamar la atención
    setTimeout(() => {
        qrContent.style.display = 'block';
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const qrTrigger = document.querySelector('.qr-trigger');
    const qrCard = document.getElementById('qrCard');
    const closeBtn = document.querySelector('.close-btn');

    // Abrir/Cerrar al hacer clic en el icono azul
    qrTrigger.addEventListener('click', function() {
        if (qrCard.style.display === 'block') {
            qrCard.style.display = 'none';
        } else {
            qrCard.style.display = 'block';
        }
    });

    // Cerrar con la 'X'
    closeBtn.addEventListener('click', function() {
        qrCard.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mainBtn = document.getElementById('mainBtn');
    const floatOptions = document.getElementById('floatOptions');
    const qrFloatCard = document.getElementById('qrFloatCard');

    // Abrir/Cerrar menú principal
    mainBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (floatOptions.style.display === 'flex') {
            floatOptions.style.display = 'none';
        } else {
            floatOptions.style.display = 'flex';
        }
        // Cerrar tarjeta QR si se cierra el menú
        qrFloatCard.style.display = 'none';
    });
});

// Función para mostrar/ocultar solo la tarjeta QR
function toggleQRCard() {
    const qrCard = document.getElementById('qrFloatCard');
    if (qrCard.style.display === 'block') {
        qrCard.style.display = 'none';
    } else {
        qrCard.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces de la navegación
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Evita el salto brusco
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Desplazamiento suave
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Ajuste por la altura del header
                    behavior: "smooth"
                });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    // Aplicar a las tarjetas de información y bloques de beneficios
    document.querySelectorAll('.info-card, .feature-box').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200; // Velocidad de la animación

    const runCounter = () => {
        stats.forEach(stat => {
            const updateCount = () => {
                const target = +stat.getAttribute('data-target');
                const count = +stat.innerText;
                const inc = target / speed;

                if (count < target) {
                    stat.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    stat.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Sensor de movimiento para activar al ver la sección
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            runCounter();
            observer.disconnect(); // Solo se ejecuta una vez
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.stats-container'));
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Abrir/Cerrar menú al dar clic en la hamburguesa
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al hacer clic en un enlace (para navegar)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Al hacer clic en el icono de barras
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Opcional: Cambiar el icono de "barras" a una "X" al abrir
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier opción
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });
});