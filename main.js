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

const reviewsCarousel = document.getElementById('reviews-carousel');

if (reviewsCarousel) {
  const reviews = [
    {
      name: 'Camila Rojas',
      role: 'Diseño UX',
      rating: 5,
      quote: 'Encontré una workstation perfecta para modelado y edición. La información técnica está muy bien organizada y me ayudó a decidir rápido.',
    },
    {
      name: 'Diego Herrera',
      role: 'Producción audiovisual',
      rating: 5,
      quote: 'La comparación entre equipos me ahorró tiempo. La estética del sitio es limpia y la navegación se siente fluida incluso en móvil.',
    },
    {
      name: 'Valentina Cruz',
      role: 'Arquitectura digital',
      rating: 4,
      quote: 'Me gustó que cada ficha tenga datos claros y precios visibles. La experiencia se siente premium y transmite confianza.',
    },
    {
      name: 'Andrés Molina',
      role: 'Gaming competitivo',
      rating: 5,
      quote: 'Pude comparar varias opciones sin perderme entre demasiados elementos. El carrusel de reseñas encaja muy bien con el resto del diseño.',
    },
  ];

  let activeReviewIndex = 0;
  let carouselTimer;

  const stars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  const renderCarousel = () => {
    reviewsCarousel.innerHTML = `
      <div class="carousel-track" style="transform: translateX(-${activeReviewIndex * 100}%);">
        ${reviews
          .map(
            (review, index) => `
              <article class="review-card ${index === activeReviewIndex ? 'is-active' : ''}">
                <div class="review-card-header">
                  <div class="review-avatar">${review.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}</div>
                  <div>
                    <h3>${review.name}</h3>
                    <p>${review.role}</p>
                  </div>
                </div>
                <div class="review-rating" aria-label="${review.rating} de 5 estrellas">${stars(review.rating)}</div>
                <p class="review-quote">"${review.quote}"</p>
              </article>
            `,
          )
          .join('')}
      </div>
      <div class="carousel-controls" aria-label="Controles del carrusel">
        <button type="button" class="carousel-button prev" aria-label="Reseña anterior">‹</button>
        <div class="carousel-indicators">
          ${reviews
            .map(
              (_, index) => `
                <button
                  type="button"
                  class="carousel-dot ${index === activeReviewIndex ? 'active' : ''}"
                  aria-label="Ver reseña ${index + 1}"
                  aria-pressed="${index === activeReviewIndex}"
                  data-review-index="${index}"
                ></button>
              `,
            )
            .join('')}
        </div>
        <button type="button" class="carousel-button next" aria-label="Reseña siguiente">›</button>
      </div>
    `;

    const prevButton = reviewsCarousel.querySelector('.carousel-button.prev');
    const nextButton = reviewsCarousel.querySelector('.carousel-button.next');
    const dots = reviewsCarousel.querySelectorAll('.carousel-dot');

    prevButton?.addEventListener('click', () => {
      activeReviewIndex = (activeReviewIndex - 1 + reviews.length) % reviews.length;
      renderCarousel();
      restartCarousel();
    });

    nextButton?.addEventListener('click', () => {
      activeReviewIndex = (activeReviewIndex + 1) % reviews.length;
      renderCarousel();
      restartCarousel();
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        activeReviewIndex = Number(dot.dataset.reviewIndex);
        renderCarousel();
        restartCarousel();
      });
    });
  };

  const restartCarousel = () => {
    window.clearInterval(carouselTimer);
    carouselTimer = window.setInterval(() => {
      activeReviewIndex = (activeReviewIndex + 1) % reviews.length;
      renderCarousel();
    }, 4500);
  };

  reviewsCarousel.setAttribute('role', 'region');
  reviewsCarousel.setAttribute('aria-live', 'polite');

  renderCarousel();
  restartCarousel();
}
