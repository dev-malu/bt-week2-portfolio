var validateForm = function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    ev.stopPropagation()

    form.classList.add('was-validated')

    if (!form.checkValidity()) {
      return;
    }

    fetch('/example.html', {
      body: JSON.stringify({
        firstname: document.getElementById('form-f-name').value,
        lastname: document.getElementById('form-l-name').value,
        email: document.getElementById('form-email').value,
        message: document.getElementById('form-message').value,
      }),
      method: 'POST'
    }).then(console.log)
      .catch(console.error)
      .finally(function () {
        alert('Thank you for contacting me.! I will get back to you soon!!');
        form.classList.remove('was-validated');
        form.reset();
      })
  })
};

window.onload = function () {
  validateForm();
};