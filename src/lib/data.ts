export const restaurant = {
  name: "Brasa & Fuego",
  tagline: "Sabores que dejan huella.",
  subtitle:
    "Carnes premium, cocina de autor y una experiencia gastronómica inolvidable.",
  description:
    "Restaurante de autor especializado en parrilla premium y cocina de fuego vivo en el corazón de Buenos Aires.",
  phoneDisplay: "+54 11 4821-3390",
  phoneHref: "+541148213390",
  whatsappNumber: "5491133218890",
  email: "reservas@brasayfuego.com.ar",
  instagram: "@brasayfuego",
  instagramUrl: "https://instagram.com/brasayfuego",
  address: "Av. Del Libertador 4850, Palermo Chico, Buenos Aires",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Av.+Del+Libertador+4850,+Buenos+Aires&output=embed",
  mapsUrl: "https://maps.google.com/?q=Av.+Del+Libertador+4850,+Buenos+Aires",
};

export const hours = [
  { day: "Lunes", time: "Cerrado" },
  { day: "Martes a Jueves", time: "19:30 – 00:00" },
  { day: "Viernes y Sábado", time: "19:30 – 01:30" },
  { day: "Domingo", time: "12:30 – 16:00 / 19:30 – 00:00" },
];

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  image: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "entradas",
    label: "Entradas",
    image:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Provoleta a las Brasas",
        description: "Provolone curado, orégano fresco y aceite de oliva ahumado.",
        price: "$8.500",
      },
      {
        name: "Carpaccio de Lomo",
        description: "Finas láminas de lomo, rúcula, parmesano y alcaparras.",
        price: "$9.800",
      },
      {
        name: "Ensalada de Burrata",
        description: "Burrata cremosa, tomates confitados, albahaca y reducción de balsámico.",
        price: "$9.200",
      },
      {
        name: "Empanadas de Brasa (x3)",
        description: "Carne cortada a cuchillo, cocidas en horno de barro.",
        price: "$7.400",
      },
    ],
  },
  {
    id: "principales",
    label: "Principales",
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Salmón Grillado",
        description: "Salmón rosado a la parrilla, espinaca salteada y salsa de cítricos.",
        price: "$17.500",
      },
      {
        name: "Risotto de Hongos",
        description: "Arroz cremoso, hongos de estación, parmesano añejo y trufa.",
        price: "$14.900",
      },
      {
        name: "Chuleta de Cerdo Glaseada",
        description: "Glaseado de manzana y romero, puré rústico y brócolini.",
        price: "$15.800",
      },
      {
        name: "Pollo de Campo al Limón",
        description: "Pechuga de campo, papas rústicas y jugo de limón asado.",
        price: "$13.600",
      },
    ],
  },
  {
    id: "pastas",
    label: "Pastas",
    image:
      "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Pappardelle al Ragú de Brasa",
        description: "Pasta fresca artesanal con ragú de carne cocida 8 horas.",
        price: "$13.200",
      },
      {
        name: "Sorrentinos de Panceta",
        description: "Relleno de panceta ahumada y provolone, salsa de manteca y salvia.",
        price: "$12.800",
      },
      {
        name: "Tagliatelle al Pesto de Nuez",
        description: "Cinta fresca, pesto de nueces tostadas y parmesano.",
        price: "$11.900",
      },
    ],
  },
  {
    id: "parrilla",
    label: "Parrilla",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Bife de Chorizo",
        description: "400g, madurado 21 días, a las brasas de quebracho.",
        price: "$19.900",
      },
      {
        name: "Ojo de Bife",
        description: "350g, punto justo, con manteca de hierbas.",
        price: "$21.500",
      },
      {
        name: "Costillar Ahumado 12 Horas",
        description: "Costilla de cerdo ahumada lentamente, glaseado de brasa.",
        price: "$18.400",
      },
      {
        name: "Parrillada Brasa & Fuego (para 2)",
        description: "Selección de cortes premium, achuras y guarniciones.",
        price: "$38.000",
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    image:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Brownie con Caramelo Ahumado",
        description: "Brownie tibio, helado de vainilla y caramelo a la sal ahumada.",
        price: "$7.200",
      },
      {
        name: "Pera al Vino Tinto",
        description: "Pera pochada en vino y especias, crema chantilly.",
        price: "$6.800",
      },
      {
        name: "Flan de Dulce de Leche",
        description: "Receta tradicional, crema batida artesanal.",
        price: "$6.400",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Malbec Reserva Brasa & Fuego",
        description: "Etiqueta exclusiva de la casa, Valle de Uco.",
        price: "$12.500",
      },
      {
        name: "Old Fashioned de Autor",
        description: "Bourbon, amargo de naranja ahumado y cáscara flameada.",
        price: "$8.900",
      },
      {
        name: "Copa de Malbec",
        description: "Selección de la casa por copa.",
        price: "$4.200",
      },
      {
        name: "Limonada de Jengibre",
        description: "Limón exprimido, jengibre fresco y menta.",
        price: "$3.600",
      },
    ],
  },
];

export type Specialty = {
  name: string;
  description: string;
  image: string;
};

export const specialties: Specialty[] = [
  {
    name: "Bife de Chorizo a la Brasa",
    description:
      "Madurado 21 días y cocido lentamente sobre quebracho blanco para un sabor ahumado inconfundible.",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Salmón Grillado con Cítricos",
    description:
      "Salmón fresco sellado a la parrilla, acompañado de una salsa de cítricos de la casa.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Pappardelle al Ragú de Brasa",
    description:
      "Pasta fresca artesanal bañada en un ragú de carne cocido durante ocho horas.",
    image:
      "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Brownie con Caramelo Ahumado",
    description:
      "Brownie tibio de chocolate 70%, helado artesanal y caramelo a la sal ahumada.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=80",
  },
];

export const galleryImages: { src: string; alt: string; tall?: boolean }[] = [
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    alt: "Salón principal de Brasa & Fuego con iluminación cálida",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Costillar ahumado servido en tabla de madera",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Interior moderno del restaurante con detalles en madera",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    alt: "Coctel de autor preparándose en la barra",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Salón principal con mesas vestidas de blanco",
  },
  {
    src: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?auto=format&fit=crop&w=1200&q=80",
    alt: "Mesa servida con corte de carne premium",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=80",
    alt: "Fachada iluminada de Brasa & Fuego al anochecer",
  },
  {
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
    alt: "Risotto de hongos servido en plato blanco",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Brindis con copas de vino tinto",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef preparando ingredientes frescos en cocina",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Martina Ledesma",
    role: "Cliente frecuente",
    quote:
      "Cada visita a Brasa & Fuego es un evento en sí mismo. El bife de chorizo es simplemente el mejor que probé en Buenos Aires.",
    rating: 5,
  },
  {
    name: "Federico Aguirre",
    role: "Crítico gastronómico",
    quote:
      "Una propuesta que combina la tradición de la parrilla argentina con técnica de cocina contemporánea. Impecable de principio a fin.",
    rating: 5,
  },
  {
    name: "Sofía Bianchi",
    role: "Cliente",
    quote:
      "Festejamos nuestro aniversario y la atención fue exquisita. El ambiente, el servicio y cada plato superaron nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Juan Cruz Molina",
    role: "Cliente",
    quote:
      "El maridaje que nos recomendó el sommelier fue perfecto. Se nota el cuidado en cada detalle, desde la carta hasta la vajilla.",
    rating: 5,
  },
];
