const params = new URLSearchParams(window.location.search);
const productId = Number(params.get('id'));
const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

document.title = `LunaTech - ${product.name}`;
document.getElementById('breadcrumb-name').textContent = product.name;
document.getElementById('detail-badge').textContent = product.badge;
document.getElementById('detail-name').textContent = product.name;
document.getElementById('detail-subtitle').textContent = product.subtitle;
document.getElementById('detail-price').textContent = `$${product.price.toLocaleString()}`;
document.getElementById('detail-summary').textContent = product.summary;
document.getElementById('detail-performance').textContent = product.performanceText;

// Galería
const mainImage = document.getElementById('main-image');
const thumbnails = document.getElementById('thumbnails');
mainImage.src = product.gallery[0];
mainImage.alt = product.name;
thumbnails.innerHTML = product.gallery.map((src, i) =>
  `<img src="${src}" alt="Vista ${i + 1}" class="${i === 0 ? 'active' : ''}">`
).join('');
thumbnails.querySelectorAll('img').forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src;
    thumbnails.querySelectorAll('img').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// Especificaciones
document.getElementById('specs-grid').innerHTML = Object.entries(product.fullSpecs)
  .map(([key, value]) => `<div class="spec-item"><span>${key}</span><span>${value}</span></div>`)
  .join('');

// Highlights
document.getElementById('highlights-list').innerHTML = product.highlights
  .map(h => `<li>${h}</li>`).join('');

// FAQ acordeón
document.getElementById('faq-list').innerHTML = product.faq.map((item, i) => `
  <div class="faq-item" data-index="${i}">
    <div class="faq-question">
      <span>${item.q}</span>
      <span class="faq-toggle">▾</span>
    </div>
    <div class="faq-answer">${item.a}</div>
  </div>
`).join('');

document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('open');
  });
});

// Productos relacionados (misma categoría, excluyendo el actual)
const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
document.getElementById('related-grid').innerHTML = related.map(p => `
  <a href="producto.html?id=${p.id}" class="product-card" style="text-decoration:none;color:inherit;">
    <div class="product-image">
      <span class="product-tag">${p.tag}</span>
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="product-info">
      <div class="product-title-row">
        <h3>${p.name}</h3>
      </div>
      <span class="product-price">$${p.price.toLocaleString()}</span>
    </div>
  </a>
`).join('');
