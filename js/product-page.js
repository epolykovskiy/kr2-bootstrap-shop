const quantityInput = document.getElementById('product-quantity');
const quantityMinus = document.getElementById('quantity-minus');
const quantityPlus = document.getElementById('quantity-plus');

const changeQuantity = (step) => {
  const min = Number(quantityInput.min);
  const max = Number(quantityInput.max);
  const value = Number(quantityInput.value) + step;

  quantityInput.value = Math.min(Math.max(value, min), max);
};

quantityMinus.addEventListener('click', () => {
  changeQuantity(-1);
});

quantityPlus.addEventListener('click', () => {
  changeQuantity(1);
});
