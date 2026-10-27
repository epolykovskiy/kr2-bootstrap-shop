const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');
const productSelect = document.getElementById('order-product');

const selectedProduct = new URLSearchParams(window.location.search).get('product');

if (selectedProduct) {
  productSelect.value = selectedProduct;
}

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validation(orderForm) === true) {
    successMessage.classList.remove('d-none');
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    resetValidation(orderForm);
  }
});

orderForm.addEventListener('reset', () => {
  orderForm.classList.remove('was-validated');
});
