const ITEMS_PER_PAGE = 6;
let currentPage = 1;

const grid = document.getElementById('product-grid');
const resultCount = document.getElementById('result-count');
const pagination = document.getElementById('pagination');
const sortSelect = document.getElementById('sort-select');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const clearBtn = document.getElementById('clear-filters');

function getActiveFilters() {
  const categorias = [...document.querySelectorAll('[data-filter="categoria"]:checked')].map(el => el.value);
  const maxPrice = Number(priceRange.value);
  return { categorias, maxPrice };
}

function applyFiltersAndSort() {
  const { categorias, maxPrice } = getActiveFilters();

  let result = PRODUCTS.filter(p => {
    const matchCategoria = categorias.length === 0 || categorias.includes(p.category);
    const matchPrecio = p.price <= maxPrice;
    return matchCategoria && matchPrecio;
  });

  if (sortSelect.value === 'price-asc') result.sort((a, b) => a.price - b.price);
  if (sortSelect.value === 'price-desc') result.sort((a, b) => b.price - a.price);

  return result;
}

function renderCard(product) {
  const locationLabels = { cdmx: 'CDMX', monterrey: 'Monterrey', guadalajara: 'Guadalajara', puebla: 'Puebla' };
  return `
    <div class="product-card">
      <div class="product-image">
        <span class="product-tag">${product.tag}</span>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <div class="product-title-row">
          <h3>${product.name}</h3>
          <span class="product-price">$${product.price.toLocaleString()}</span>
        </div>
        <ul class="product-specs">
          ${product.specs.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <a href="producto.html?id=${product.id}" class="btn-details">Ver Detalles</a>
      </div>
    </div>
  `;
}

function renderPagination(totalItems) {
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  pagination.innerHTML = '';
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => {
      currentPage = i;
      render();
      window.scrollTo({ top: document.getElementById('catalogo').offsetTop - 100, behavior: 'smooth' });
    });
    pagination.appendChild(btn);
  }
}

function render() {
  const filtered = applyFiltersAndSort();
  resultCount.textContent = filtered.length;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  grid.innerHTML = pageItems.length
    ? pageItems.map(renderCard).join('')
    : '<p class="no-results">No se encontraron equipos con esos filtros.</p>';

  renderPagination(filtered.length);
}

document.querySelectorAll('[data-filter]').forEach(el => {
  el.addEventListener('change', () => { currentPage = 1; render(); });
});

priceRange.addEventListener('input', () => {
  priceValue.textContent = `$${Number(priceRange.value).toLocaleString()}`;
  currentPage = 1;
  render();
});

sortSelect.addEventListener('change', () => { currentPage = 1; render(); });

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(el => el.checked = false);
  priceRange.value = 5000;
  priceValue.textContent = '$5000';
  sortSelect.value = 'relevance';
  currentPage = 1;
  render();
});

render();
