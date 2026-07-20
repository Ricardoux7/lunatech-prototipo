const PRODUCTS = [
  {
    id: 1,
    name: "iPad Pro 12.9",
    category: "diseno",
    tag: "Diseño",
    price: 2499,
    image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111979_ipad-pro-12-2018.png",
    gallery: ["https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111979_ipad-pro-12-2018.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKipPaeorQEPgKfsjDSnBDcXkbSCQN2u8mCoe4CyqLj6fN2DorhyGWk5J7&s=10"],
    specs: ["Core i9-13900HX", "64GB DDR5"],
    badge: "Serie Profesional",
    subtitle: "Estación Móvil de Alto Rendimiento",
    summary: "Diseñada para creadores que necesitan potencia sin renunciar a la movilidad. Ideal para renderizado 3D, edición de video y flujos de trabajo profesionales exigentes.",
    performanceText: "El Precision Master Pro-16 rompe las barreras entre laptop y estación de trabajo. Su combinación de GPU dedicada y refrigeración avanzada permite manejar proyectos que antes exigían un equipo de escritorio.",
    fullSpecs: {
      "Procesador": "Intel Core i9-13900HX",
      "Memoria RAM": "64GB DDR5 4800MHz",
      "GPU / Video": "NVIDIA RTX 4090 Laptop 16GB",
      "Almacenamiento": "2TB NVMe SSD Gen4",
      "Pantalla": "16'' 4K OLED 120Hz",
      "Sistema Operativo": "Windows 11 Pro"
    },
    highlights: ["Refrigeración líquida de vapor", "Teclado retroiluminado por zonas", "Garantía extendida de 2 años"],
    faq: [
      { q: "¿Qué incluye la garantía premium?", a: "Cobertura total de piezas y mano de obra durante 2 años, incluyendo soporte prioritario." },
      { q: "¿Puedo expandir el almacenamiento después de la compra?", a: "Sí, cuenta con una ranura NVMe adicional libre para expansión." },
      { q: "¿Cómo funciona el proceso de entrega en tienda?", a: "Reservas el equipo en línea y lo recoges en la sucursal seleccionada dentro de 48 horas." }
    ]
  },
  {
    id: 2,
    name: "SwiftOffice Ultra-X",
    category: "oficina",
    tag: "Oficina",
    price: 899,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVqgYvaBoma9mi_BBhudykCcPpaSQrAWnXFbeIA-dHQ&s=10",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVqgYvaBoma9mi_BBhudykCcPpaSQrAWnXFbeIA-dHQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Rh26PRRVSu2sbxMvstue6y0f2DLS45zwnEd-gAJ8nw&s=10"],
    specs: ["Ryzen 7 5800U", "16GB LPDDR4x"],
    badge: "Serie Esencial",
    subtitle: "Productividad Ligera para el Día a Día",
    summary: "Un equipo ultraportátil pensado para tareas de oficina, videollamadas y multitarea sin complicaciones.",
    performanceText: "El SwiftOffice Ultra-X prioriza la batería y el peso sin sacrificar fluidez en tareas cotidianas de oficina.",
    fullSpecs: {
      "Procesador": "AMD Ryzen 7 5800U",
      "Memoria RAM": "16GB LPDDR4x",
      "GPU / Video": "AMD Radeon Integrada",
      "Almacenamiento": "512GB NVMe SSD",
      "Pantalla": "14'' FHD IPS",
      "Sistema Operativo": "Windows 11 Home"
    },
    highlights: ["Hasta 14 horas de batería", "Peso de 1.2 kg", "Garantía de 1 año"],
    faq: [
      { q: "¿Qué incluye la garantía premium?", a: "1 año de cobertura estándar por defectos de fabricación." },
      { q: "¿Puedo expandir la RAM después de la compra?", a: "No, la memoria está soldada a la placa base." },
      { q: "¿Cómo funciona el proceso de entrega en tienda?", a: "Reservas en línea y recoges en la sucursal de Guadalajara en un plazo de 24 horas." }
    ]
  },
  {
    id: 3,
    name: "ChromeBook",
    category: "gaming",
    tag: "Gaming",
    price: 3199,
    image: "https://m.media-amazon.com/images/I/71eKzZNpPXL.jpg",
    gallery: ["https://m.media-amazon.com/images/I/71eKzZNpPXL.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRDNd8fyv39zQts0NF29zh7AreCc3YZ6zG9AqUaCd9w&s=10"],
    specs: ["Ryzen 9 7950X", "32GB DDR5"],
    badge: "Serie Gaming",
    subtitle: "Rendimiento Extremo para Gaming Competitivo",
    summary: "Construido para los títulos más exigentes en resoluciones altas y frecuencias de refresco elevadas.",
    performanceText: "El ChromeBook combina un procesador de 16 núcleos con gráficos de última generación para dominar cualquier título AAA en 4K.",
    fullSpecs: {
      "Procesador": "AMD Ryzen 9 7950X",
      "Memoria RAM": "32GB DDR5 6000MHz",
      "GPU / Video": "NVIDIA RTX 4080 16GB",
      "Almacenamiento": "1TB NVMe SSD Gen4",
      "Pantalla Soporte": "Hasta 4 monitores 4K a 144Hz",
      "Sistema Operativo": "Windows 11 Pro"
    },
    highlights: ["Iluminación RGB personalizable", "Refrigeración líquida AIO 360mm", "Garantía extendida de 3 años"],
    faq: [
      { q: "¿Qué incluye la garantía premium?", a: "3 años de cobertura completa incluyendo mantenimiento preventivo anual." },
      { q: "¿Puedo expandir la RAM después de la compra?", a: "Sí, cuenta con 2 ranuras adicionales disponibles." },
      { q: "¿Cómo funciona el proceso de entrega en tienda?", a: "El equipo se configura y prueba antes de la entrega, con cita previa." }
    ]
  },
  {
    id: 4,
    name: "Lenovo 360",
    category: "oficina",
    tag: "Oficina",
    price: 650,
    image: "https://m.media-amazon.com/images/I/61Y0cntFNVL.jpg",
    gallery: ["https://m.media-amazon.com/images/I/61Y0cntFNVL.jpg","https://m.media-amazon.com/images/I/31PYgMXZVJL._AC_UF1000,1000_QL80_.jpg"],
    specs: ["Core i5-12400", "8GB DDR4"],
    badge: "Serie Esencial",
    subtitle: "Compacta, Eficiente y Silenciosa",
    summary: "La solución ideal para pequeñas oficinas que buscan un equipo confiable sin ocupar mucho espacio.",
    performanceText: "El EcoWork Compact S está optimizado para consumo energético reducido y operación silenciosa en entornos de oficina.",
    fullSpecs: {
      "Procesador": "Intel Core i5-12400",
      "Memoria RAM": "8GB DDR4 3200MHz",
      "GPU / Video": "Intel UHD Graphics 730",
      "Almacenamiento": "256GB NVMe SSD",
      "Gabinete": "Mini Torre Compacta",
      "Sistema Operativo": "Windows 11 Pro"
    },
    highlights: ["Consumo energético reducido", "Operación silenciosa (<25dB)", "Garantía de 1 año"],
    faq: [
      { q: "¿Qué incluye la garantía premium?", a: "1 año de cobertura estándar por defectos de fabricación." },
      { q: "¿Puedo expandir la RAM después de la compra?", a: "Sí, cuenta con una ranura adicional libre." },
      { q: "¿Cómo funciona el proceso de entrega en tienda?", a: "Disponible para retiro inmediato sujeto a existencias." }
    ]
  },
  {
    id: 5,
    name: "Asus vivoBook Pro 16X OLED",
    category: "diseno",
    tag: "Diseño",
    price: 1850,
    image: "https://braincorp.com.ve/wp-content/uploads/2026/03/CP-ASUS-90NB0VX1-M024T0-f92292.webp",
    gallery: ["https://braincorp.com.ve/wp-content/uploads/2026/03/CP-ASUS-90NB0VX1-M024T0-f92292.webp", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jn547EKnw9GFY79BaZzVY3dJupx4IFIrrMqB-NW703oHod7qrqBMlAlf&s=10"],
    specs: ["Apple M2 Pro", "32GB Unificada"],
    badge: "Serie Creativa",
    subtitle: "Potencia Unificada para Diseño y Edición",
    summary: "Pensada para diseñadores y editores que trabajan con archivos pesados en resoluciones de color precisas.",
    performanceText: "Gracias a su arquitectura de memoria unificada, el Visionary Studio G2 acelera flujos de trabajo de edición de video y diseño gráfico profesional.",
    fullSpecs: {
      "Procesador": "Apple M2 Pro (12 núcleos)",
      "Memoria RAM": "32GB Unificada",
      "GPU / Video": "GPU integrada de 19 núcleos",
      "Almacenamiento": "1TB SSD",
      "Pantalla": "27'' 5K Retina",
      "Sistema Operativo": "macOS Sonoma"
    },
    highlights: ["Calibración de color de fábrica", "Puertos Thunderbolt 4", "Garantía de 2 años"],
    faq: [
      { q: "¿Qué incluye la garantía premium?", a: "2 años de cobertura completa con soporte técnico especializado." },
      { q: "¿Puedo expandir el almacenamiento después de la compra?", a: "No, el almacenamiento es fijo de fábrica." },
      { q: "¿Cómo funciona el proceso de entrega en tienda?", a: "Se recomienda cita previa para revisión de calibración antes de la entrega." }
    ]
  },
  {
    id: 6,
    name: "Laptop HP Envy 13",
    category: "gaming",
    tag: "Gaming",
    price: 1599,
    image: "https://sigmatiendas.com/cdn/shop/files/LAPTOP-HP-ENVY-13-front_grande.jpg?v=1716839711",
    gallery: ["https://sigmatiendas.com/cdn/shop/files/LAPTOP-HP-ENVY-13-front_grande.jpg?v=1716839711", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8MJ9UFZBE5Ijm125Vti_b_0Tn77sL-SYlBjifB5J7tqrIFCFAOGKo8Y&s=10"],
    specs: ["Core i7-13700H", "16GB DDR5"],
    badge: "Serie Gaming",
    subtitle: "Movilidad sin Sacrificar Rendimiento",
    summary: "Un laptop gaming pensado para quienes necesitan llevar su equipo a torneos o sesiones fuera de casa.",
    performanceText: "El StormBreaker Z-Series equilibra portabilidad y potencia gráfica para asegurar tasas de cuadros estables en resolución 1440p.",
    fullSpecs: {
      "Procesador": "Intel Core i7-13700H",
      "Memoria RAM": "16GB DDR5 5200MHz",
      "GPU / Video": "NVIDIA RTX 4060 8GB",
      "Almacenamiento": "1TB NVMe SSD",
      "Pantalla": "15.6'' QHD 165Hz",
      "Sistema Operativo": "Windows 11 Home"
    },
    highlights: ["Teclado mecánico retroiluminado", "Batería de larga duración", "Garantía de 1 año"],
    faq: [
      { q: "¿Qué incluye la garantía premium?", a: "1 año de cobertura estándar, extensible a 2 años con costo adicional." },
      { q: "¿Puedo expandir la RAM después de la compra?", a: "Sí, cuenta con una ranura adicional disponible." },
      { q: "¿Cómo funciona el proceso de entrega en tienda?", a: "Disponible para retiro el mismo día sujeto a existencias." }
    ]
  }
];
