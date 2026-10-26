const orderModal = document.getElementById('orderModal');
const modalForm = document.getElementById('modal-form');
const modalProduct = document.getElementById('modal-product');
const orderToast = bootstrap.Toast.getOrCreateInstance(document.getElementById('order-toast'));

orderModal.addEventListener('show.bs.modal', (event) => {
  const button = event.relatedTarget;

  if (button && button.dataset.product) {
    modalProduct.value = button.dataset.product;
  }
});

orderModal.addEventListener('hidden.bs.modal', () => {
  resetValidation(modalForm);
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validation(modalForm) === true) {
    bootstrap.Modal.getInstance(orderModal).hide();
    orderToast.show();
  }
});
