const feedbackForm = document.getElementById('feedback-form');
const successMessage = document.getElementById('success-message');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validation(feedbackForm) === true) {
    successMessage.classList.remove('d-none');

    resetValidation(feedbackForm);
  }
});
