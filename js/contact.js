var validateForm = function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    ev.stopPropagation()

    var error = false;

    var firstNameInput = document.getElementById('form-f-name');
    var firstName = firstNameInput.value.trim();
    var firstNameError = document.querySelector('#form-f-name + .invalid-feedback');
    firstNameInput.classList.remove('is-valid', 'is-invalid');
    if (!(/^[a-z ]+$/i.test(firstName))) {
      error = true;
      firstNameError.innerHTML = 'Invalid firstName';
      firstNameInput.classList.add('is-invalid');
    } else {
      firstNameError.innerHTML = '';
      firstNameInput.classList.add('is-valid');
    }

    var lastNameInput = document.getElementById('form-l-name');
    var lastName = lastNameInput.value.trim();
    var lastNameError = document.querySelector('#form-l-name + .invalid-feedback');
    lastNameInput.classList.remove('is-valid', 'is-invalid');
    if(!(/^[a-z ]+$/i.test(lastName))) {
      error = true;
      lastNameError.innerHTML = 'Invalid lastName';
      lastNameInput.classList.add('is-invalid');
    } else {
      lastNameError.innerHTML = '';
      lastNameInput.classList.add('is-valid');
    }
    var emailInput = document.getElementById('form-email');
    let email = emailInput.value.trim();
    var emailError = document.querySelector('#form-email + .invalid-feedback');
    emailError.innerHTML = '';
    emailInput.classList.remove('is-valid','is-invalid');
    if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email))) {
      error = true;
      emailError.innerHTML = 'Invalid Email';
      emailInput.classList.add('is-invalid');
    } else {
      emailError.innerHTML = '';
      emailInput.classList.add('is-valid');
    }

    var contactReasonInput = document.getElementById('form-message');
    var contactReason = contactReasonInput.value.trim();
    var contactReasonError = document.querySelector('#form-message + .invalid-feedback');
    contactReasonError.innerHTML = '';
    contactReasonInput.classList.remove('is-valid','is-invalid');
    if(contactReason.length < 5){
      contactReasonError.innerHTML = 'Invalid contact reason';
      contactReasonInput.classList.add('is-invalid');
      error = true;
    } else {
      error = false;
      contactReason.innerHTML = '';
      contactReasonInput.classList.add('is-valid');
    }

    if (error) {
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