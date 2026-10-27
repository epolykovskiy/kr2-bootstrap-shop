const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');
const productSelect = document.getElementById('order-product');

const commentInput = document.getElementById('order-comment');

const params = new URLSearchParams(window.location.search);
const selectedProduct = params.get('product');
const selectedSize = params.get('size');
const selectedQuantity = params.get('quantity');

if (selectedProduct) {
  productSelect.value = selectedProduct;
}

if (selectedSize && selectedQuantity) {
  commentInput.value = `Размер: ${selectedSize}, количество: ${selectedQuantity} шт.`;
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
