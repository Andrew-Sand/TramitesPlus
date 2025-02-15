// Abrir modal
const botonesRequisitos = document.querySelectorAll('.ver-requisitos');
const modales = document.querySelectorAll('.modal');

botonesRequisitos.forEach((boton) => {
    boton.addEventListener('click', () => {
        const modalId = boton.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    });
});

// Cerrar modal
const closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    });
});

// Cerrar al hacer clic fuera del modal
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        setTimeout(() => e.target.style.display = 'none', 300);
    }
});

// Mostrar requisitos según ubicación
const selectoresUbicacion = document.querySelectorAll('.select-ubicacion');

selectoresUbicacion.forEach((selector) => {
    selector.addEventListener('change', (e) => {
        const modal = selector.closest('.modal-content');
        const ubicacion = e.target.value;

        // Ocultar todos los requisitos
        modal.querySelectorAll('.requisitos-ubicacion').forEach((requisitos) => {
            requisitos.style.display = 'none';
        });

        // Mostrar requisitos de la ubicación seleccionada
        if (ubicacion) {
            const requisitos = modal.querySelector(`#requisitos-${ubicacion}`);
            if (requisitos) {
                requisitos.style.display = 'block';
            }
        }
    });
});

// Añadir al final del archivo
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Función para el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Añadir animación adicional al botón específico
document.querySelector('.hero-content .cta-button').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 300);
});

// Inicializar efectos al cargar
document.addEventListener('DOMContentLoaded', () => {
    // ... otras inicializaciones ...
});

// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Bloquear scroll cuando el menú está abierto
    if(nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if(!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});