// Menú hamburguesa (header)
const menuToggle = document.getElementById('menu-toggle');
const bttns = document.getElementById('bttns');

if (menuToggle && bttns) {
  menuToggle.addEventListener('click', () => {
    bttns.classList.toggle('open');
  });
}

// Mostrar/ocultar filtros en mobile (solo existe en index.html)
const filtersToggle = document.getElementById('filters-toggle');
const filtersPanel = document.getElementById('filters-panel');

if (filtersToggle && filtersPanel) {
  filtersToggle.addEventListener('click', () => {
    const isOpen = filtersPanel.classList.toggle('open');
    filtersToggle.textContent = isOpen ? 'Ocultar Filtros' : 'Mostrar Filtros';
  });
}
