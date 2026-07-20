# LunaTech - Prototipo

## Estructura
- `index.html` / `index.css` — Página principal (header, hero, features, catálogo, footer)
- `producto.html` / `producto.css` / `producto.js` — Página de detalle de producto
- `products.js` — Datos de los 6 productos (compartido entre ambas páginas)
- `catalog.js` — Lógica de filtros, orden y paginación del catálogo
- `main.js` — Menú hamburguesa mobile y toggle de filtros mobile

## Pendiente de tu parte
Coloca en la carpeta `sources/` las siguientes imágenes (o cambia los nombres en `products.js`):
- `lunatech.png` (logo)
- `pexels-atahandemir-30469974.jpg` (imagen del hero)
- `product-1.jpg` a `product-6.jpg` (una foto por producto; puedes repetir/renombrar según tengas)

## Responsive
Se agregaron breakpoints en:
- `1024px` — ajustes de tablet (grid de 2 columnas, header más compacto)
- `900px` — menú hamburguesa activo, filtros del catálogo colapsables con botón "Mostrar Filtros", hero apilado verticalmente
- `560px` — mobile pequeño (botones a ancho completo, specs en columna)

Pruébalo con las DevTools del navegador (Ctrl+Shift+M en Chrome/Edge) en anchos de 1024px, 768px y 375px.
