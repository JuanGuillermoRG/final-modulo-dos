// Validación formulario contacto
(() => {
  'use strict'

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  }
})();

// Modal Test de Seguridad
document.getElementById('openTest')?.addEventListener('click', () => {
  const testModal = new bootstrap.Modal(document.getElementById('securityTestModal'));
  testModal.show();

  const formTest = document.getElementById('testForm');
  const resultado = document.getElementById('resultadoTest');

  formTest.reset();
  resultado.style.display = 'none';
  resultado.innerHTML = '';

  formTest.addEventListener('submit', function (e) {
    e.preventDefault();

    let score = 0;
    score += Number(document.getElementById('q1').value);
    score += Number(document.getElementById('q2').value);
    score += Number(document.getElementById('q3').value);

    let message = '';

    if (score === 3) {
      message = '<div class="alert alert-success">¡Excelente! Tu seguridad es fuerte.</div>';
    } else if (score === 2) {
      message = '<div class="alert alert-warning">Buen trabajo, pero aún puedes mejorar.</div>';
    } else {
      message = '<div class="alert alert-danger">Debes mejorar tus prácticas de seguridad.</div>';
    }

    resultado.innerHTML = message;
    resultado.style.display = 'block';
  }, { once: true });
});
