export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199.99,
    originalPrice: 1299.99,
    category: "electronics",
    brand: "Apple",
    rating: 4.8,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    ],
    description: "El iPhone más avanzado hasta la fecha con chip A17 Pro y cámara de 48MP",
    features: ["Chip A17 Pro", "Cámara 48MP", "Titanio", "USB-C", "5G"],
    inStock: true,
    stock: 25,
    discount: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 1099.99,
    originalPrice: 1199.99,
    category: "electronics",
    brand: "Apple",
    rating: 4.9,
    reviews: 1523,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    ],
    description: "Ultraligero y potente con el nuevo chip M3 de Apple",
    features: ["Chip M3", "13.6 pulgadas", "18h batería", "MagSafe", "Thunderbolt"],
    inStock: true,
    stock: 15,
    discount: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 349.99,
    originalPrice: 399.99,
    category: "electronics",
    brand: "Sony",
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ],
    description: "Auriculares inalámbricos con cancelación de ruido líder en la industria",
    features: ["Cancelación de ruido", "30h batería", "Hi-Res Audio", "Bluetooth 5.2"],
    inStock: true,
    stock: 42,
    discount: 13,
    isNew: false,
    isFeatured: true
  },
  {
    id: 4,
    name: "Nike Air Max 270",
    price: 129.99,
    originalPrice: 149.99,
    category: "fashion",
    brand: "Nike",
    rating: 4.5,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    ],
    description: "Zapatillas deportivas con la máxima comodidad y estilo urbano",
    features: ["Air Max", "Mesh transpirable", "Suela de goma", "Diseño moderno"],
    inStock: true,
    stock: 67,
    discount: 13,
    isNew: false,
    isFeatured: false
  },
  {
    id: 5,
    name: "Samsung 55\" QLED 4K",
    price: 799.99,
    originalPrice: 999.99,
    category: "electronics",
    brand: "Samsung",
    rating: 4.6,
    reviews: 634,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500"
    ],
    description: "Smart TV QLED 4K con tecnología Quantum Dot y HDR10+",
    features: ["QLED 4K", "HDR10+", "Smart TV", "Alexa Built-in", "Gaming Mode"],
    inStock: true,
    stock: 8,
    discount: 20,
    isNew: false,
    isFeatured: true
  },
  {
    id: 6,
    name: "Adidas Ultraboost 22",
    price: 179.99,
    originalPrice: 199.99,
    category: "fashion",
    brand: "Adidas",
    rating: 4.4,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500"
    ],
    description: "Zapatillas de running con tecnología Boost para máximo retorno de energía",
    features: ["Boost", "Primeknit", "Continental Rubber", "Torsion System"],
    inStock: true,
    stock: 34,
    discount: 10,
    isNew: false,
    isFeatured: false
  },
  {
    id: 7,
    name: "KitchenAid Stand Mixer",
    price: 449.99,
    originalPrice: 499.99,
    category: "home",
    brand: "KitchenAid",
    rating: 4.8,
    reviews: 1892,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      "https://images.unsplash.com/photo-1585515656973-a0e4e4faecb8?w=500"
    ],
    description: "Batidora de pie profesional con múltiples accesorios incluidos",
    features: ["Motor 325W", "Tazón 4.5L", "10 velocidades", "Accesorios incluidos"],
    inStock: true,
    stock: 12,
    discount: 10,
    isNew: false,
    isFeatured: true
  },
  {
    id: 8,
    name: "Dyson V15 Detect",
    price: 649.99,
    originalPrice: 749.99,
    category: "home",
    brand: "Dyson",
    rating: 4.7,
    reviews: 743,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      "https://images.unsplash.com/photo-1586880244386-8b3345c8ded9?w=500"
    ],
    description: "Aspiradora inalámbrica con detección láser de polvo microscópico",
    features: ["Detección láser", "60min batería", "Filtración HEPA", "Múltiples cabezales"],
    inStock: true,
    stock: 18,
    discount: 13,
    isNew: true,
    isFeatured: false
  }
];

export const categories = [
  { id: "electronics", name: "Electrónicos", icon: "📱" },
  { id: "fashion", name: "Moda", icon: "👕" },
  { id: "home", name: "Hogar", icon: "🏠" },
  { id: "sports", name: "Deportes", icon: "⚽" },
  { id: "books", name: "Libros", icon: "📚" },
  { id: "beauty", name: "Belleza", icon: "💄" }
];