function validation(form) {
  form.classList.add('was-validated');

  if (!form.checkValidity()) {
    form.querySelector(':invalid').focus();
    return false;
  }

  return true;
}

function resetValidation(form) {
  form.reset();
  form.classList.remove('was-validated');
}
