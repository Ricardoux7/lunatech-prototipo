const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Nota: este prototipo no envía datos a ningún servidor todavía.
    // Aquí se conectaría más adelante un endpoint real o un servicio como EmailJS/Formspree.
    formNote.textContent = '¡Gracias! Tu mensaje fue registrado. Te contactaremos pronto.';
    formNote.classList.add('visible');
    contactForm.reset();

    setTimeout(() => {
      formNote.classList.remove('visible');
    }, 5000);
  });
}
