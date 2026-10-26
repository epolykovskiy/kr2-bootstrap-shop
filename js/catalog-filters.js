const filtersForm = document.getElementById('filters-form');
const sortSelect = document.getElementById('catalog-sort');
const productsList = document.getElementById('products-list');
const productsCount = document.getElementById('products-count');
const emptyMessage = document.getElementById('empty-message');
const filtersOffcanvas = document.getElementById('catalogFilters');

const productItems = Array.from(productsList.querySelectorAll('[data-category]'));

const sortItems = (items) => {
  const sortedItems = [...items];

  if (sortSelect.value === 'price-asc') {
    sortedItems.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (sortSelect.value === 'price-desc') {
    sortedItems.sort((a, b) => b.dataset.price - a.dataset.price);
  } else {
    sortedItems.sort((a, b) => a.dataset.order - b.dataset.order);
  }

  return sortedItems;
};

const applyFilters = () => {
  const categories = Array.from(filtersForm.querySelectorAll('input[name="category"]:checked'))
    .map((input) => input.value);
  const priceFrom = Number(filtersForm.elements['price-from'].value) || 0;
  const priceTo = Number(filtersForm.elements['price-to'].value) || Infinity;
  const onlyNew = filtersForm.elements['only-new'].checked;

  let visibleCount = 0;

  productItems.forEach((item) => {
    const price = Number(item.dataset.price);

    const isVisible = (categories.length === 0 || categories.includes(item.dataset.category))
      && price >= priceFrom
      && price <= priceTo
      && (!onlyNew || item.dataset.new === 'true');

    item.classList.toggle('d-none', !isVisible);

    if (isVisible) {
      visibleCount += 1;
    }
  });

  productsList.append(...sortItems(productItems));

  productsCount.textContent = visibleCount;
  emptyMessage.classList.toggle('d-none', visibleCount > 0);
};

filtersForm.addEventListener('input', applyFilters);
sortSelect.addEventListener('change', applyFilters);

filtersForm.addEventListener('reset', () => {
  setTimeout(applyFilters);
});

filtersForm.addEventListener('submit', (event) => {
  event.preventDefault();

  applyFilters();
  bootstrap.Offcanvas.getOrCreateInstance(filtersOffcanvas).hide();
});
