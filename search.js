// Requiere que products.js esté cargado antes que este script (define PRODUCTS)

const searchInput = document.getElementById('search-input');

if (searchInput && typeof PRODUCTS !== 'undefined') {
  const searchWrapper = searchInput.closest('#search');

  // Crea el contenedor del dropdown una sola vez
  const dropdown = document.createElement('div');
  dropdown.className = 'search-dropdown';
  searchWrapper.appendChild(dropdown);

  function findMatches(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  function renderDropdown(query) {
    const matches = findMatches(query);

    if (!query.trim()) {
      dropdown.classList.remove('open');
      dropdown.innerHTML = '';
      return;
    }

    if (matches.length === 0) {
      dropdown.innerHTML = `<p class="search-no-results">No encontramos equipos para "${query}".</p>`;
      dropdown.classList.add('open');
      return;
    }

    const results = matches.slice(0, 5);
    dropdown.innerHTML = results.map(p => `
      <a href="producto.html?id=${p.id}" class="search-result-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="search-result-info">
          <span>${p.name}</span>
          <span class="search-result-price">$${p.price.toLocaleString()}</span>
        </div>
      </a>
    `).join('') + `<a href="index.html?buscar=${encodeURIComponent(query)}#catalogo" class="search-view-all">Ver los ${matches.length} resultados en el catálogo</a>`;

    dropdown.classList.add('open');
  }

  searchInput.addEventListener('input', () => {
    renderDropdown(searchInput.value);
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) renderDropdown(searchInput.value);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    const matches = findMatches(query);
    if (matches.length === 1) {
      window.location.href = `producto.html?id=${matches[0].id}`;
    } else {
      window.location.href = `index.html?buscar=${encodeURIComponent(query)}#catalogo`;
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchWrapper.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  // Si venimos de otra página con ?buscar=..., precarga el input
  const params = new URLSearchParams(window.location.search);
  const incomingQuery = params.get('buscar');
  if (incomingQuery) {
    searchInput.value = incomingQuery;
  }
}
