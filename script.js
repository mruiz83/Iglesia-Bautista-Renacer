
// ===== Menú desplegable de ventanas (móvil) =====
const menuToggle = document.getElementById('menuToggle');
const ventanasNav = document.getElementById('ventanasNav');
 
menuToggle.addEventListener('click', () => {
  const isOpen = ventanasNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.classList.toggle('is-active', isOpen);
});
 
// Cierra el menú al elegir una ventana (en móvil)
document.querySelectorAll('.ventana').forEach(link => {
  link.addEventListener('click', () => {
    ventanasNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
 
// ===== Animación al hacer scroll (reveal) =====
const revealEls = document.querySelectorAll('.reveal');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
 
revealEls.forEach(el => observer.observe(el));
 
// ===== Formulario de contacto =====
// TODO: conectar con un servicio real de envío de correos (ej. Formspree, EmailJS, backend propio)
const form = document.getElementById('formContacto');
const nota = document.getElementById('formNota');
 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  nota.textContent = '¡Gracias! Tu mensaje fue registrado. (Conecta este formulario a un servicio de envío real).';
  form.reset();
});
 
// ===== Año automático en el pie de página =====
document.getElementById('anio').textContent = new Date().getFullYear();