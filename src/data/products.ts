import { ref } from "vue";

export const products = ref([
  {
    id: 1,
    slug: "iphone-15-pro",
    title_ru: "iPhone 15 Pro 256GB",
    title_en: "iPhone 15 Pro 256GB",
    title_uz: "iPhone 15 Pro 256GB",
    description_ru: "Новейший iPhone с титановым корпусом и чипом A17 Pro. Профессиональная камера с 3x зумом.",
    description_en: "Latest iPhone with titanium body and A17 Pro chip. Professional camera with 3x zoom.",
    description_uz: "Titan korpusli va A17 Pro chipli eng yangi iPhone. 3x zum bilan professional kamera.",
    price: 1299,
    oldPrice: 1499,
    category: "electronics",
    subcategory: "smartphones",
    brand: "Apple",
    rating: 4.9,
    reviewsCount: 342,
    images: [
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: true,
    isPopular: true,
    discountPercent: 13,
    specifications: {
      display: "6.1 inch OLED",
      processor: "A17 Pro",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP + 12MP + 12MP"
    }
  },
  {
    id: 2,
    slug: "samsung-galaxy-s24",
    title_ru: "Samsung Galaxy S24 Ultra",
    title_en: "Samsung Galaxy S24 Ultra",
    title_uz: "Samsung Galaxy S24 Ultra",
    description_ru: "Флагманский смартфон с встроенным стилусом S Pen и камерой 200MP.",
    description_en: "Flagship smartphone with built-in S Pen stylus and 200MP camera.",
    description_uz: "S Pen ruchka va 200MP kamera bilan flaman smartfon.",
    price: 1199,
    oldPrice: null,
    category: "electronics",
    subcategory: "smartphones",
    brand: "Samsung",
    rating: 4.8,
    reviewsCount: 287,
    images: [
      "https://images.pexels.com/photos/3999785/pexels-photo-3999785.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: true,
    isPopular: true,
    discountPercent: 0,
    specifications: {
      display: "6.8 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "512GB",
      camera: "200MP + 50MP + 12MP + 10MP"
    }
  },
  {
    id: 3,
    slug: "macbook-air-m3",
    title_ru: "MacBook Air M3 13\"",
    title_en: "MacBook Air M3 13\"",
    title_uz: "MacBook Air M3 13\"",
    description_ru: "Тонкий и мощный ноутбук на чипе M3. Идеален для работы и учебы.",
    description_en: "Thin and powerful laptop with M3 chip. Perfect for work and study.",
    description_uz: "M3 chipli yupqa va kuchli noutbuk. Ish va o'qish uchun ideal.",
    price: 1099,
    oldPrice: 1199,
    category: "electronics",
    subcategory: "laptops",
    brand: "Apple",
    rating: 4.9,
    reviewsCount: 521,
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: true,
    isPopular: true,
    discountPercent: 8,
    specifications: {
      display: "13.6 inch Retina",
      processor: "Apple M3",
      ram: "8GB",
      storage: "256GB SSD",
      battery: "18 hours"
    }
  },
  {
    id: 4,
    slug: "airpods-pro-2",
    title_ru: "AirPods Pro 2-го поколения",
    title_en: "AirPods Pro 2nd Generation",
    title_uz: "AirPods Pro 2-avlod",
    description_ru: "Беспроводные наушники с активным шумоподавлением и пространственным звуком.",
    description_en: "Wireless earbuds with active noise cancellation and spatial audio.",
    description_uz: "Faol shovqin bekor qilish va fazoviy audio bilan simsiz quloqchinlar.",
    price: 249,
    oldPrice: null,
    category: "electronics",
    subcategory: "audio",
    brand: "Apple",
    rating: 4.7,
    reviewsCount: 892,
    images: [
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: true,
    discountPercent: 0,
    specifications: {
      type: "In-ear",
      connectivity: "Bluetooth 5.3",
      battery: "6 hours + 24 hours with case",
      features: "ANC, Spatial Audio, MagSafe"
    }
  },
  {
    id: 5,
    slug: "mens-leather-jacket",
    title_ru: "Мужская кожаная куртка",
    title_en: "Men's Leather Jacket",
    title_uz: "Erkaklar charm kurtka",
    description_ru: "Стильная кожаная куртка из натуральной кожи. Классический дизайн.",
    description_en: "Stylish leather jacket made from genuine leather. Classic design.",
    description_uz: "Asl teridan tayyorlangan zamonaviy charm kurtka. Klassik dizayn.",
    price: 299,
    oldPrice: 399,
    category: "clothing",
    subcategory: "jackets",
    brand: "Premium Fashion",
    rating: 4.6,
    reviewsCount: 124,
    images: [
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1661771/pexels-photo-1661771.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: true,
    discountPercent: 25,
    specifications: {
      material: "Genuine Leather",
      sizes: "S, M, L, XL, XXL",
      color: "Black, Brown",
      care: "Dry clean only"
    }
  },
  {
    id: 6,
    slug: "womens-sneakers",
    title_ru: "Женские кроссовки Nike",
    title_en: "Women's Nike Sneakers",
    title_uz: "Ayollar Nike krossovka",
    description_ru: "Удобные спортивные кроссовки для бега и фитнеса.",
    description_en: "Comfortable sports sneakers for running and fitness.",
    description_uz: "Yugurish va fitnes uchun qulay sport krossovkalar.",
    price: 129,
    oldPrice: 179,
    category: "shoes",
    subcategory: "sneakers",
    brand: "Nike",
    rating: 4.8,
    reviewsCount: 456,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: true,
    discountPercent: 28,
    specifications: {
      material: "Mesh + Synthetic",
      sizes: "36-42",
      color: "White, Black, Pink",
      sole: "Rubber"
    }
  },
  {
    id: 7,
    slug: "smart-watch",
    title_ru: "Умные часы Galaxy Watch 6",
    title_en: "Galaxy Watch 6 Smart Watch",
    title_uz: "Galaxy Watch 6 Aqlli soat",
    description_ru: "Умные часы с мониторингом здоровья и фитнес-трекером.",
    description_en: "Smart watch with health monitoring and fitness tracker.",
    description_uz: "Salomatlik nazorati va fitnes trekeri bilan aqlli soat.",
    price: 299,
    oldPrice: null,
    category: "accessories",
    subcategory: "watches",
    brand: "Samsung",
    rating: 4.7,
    reviewsCount: 234,
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: true,
    isPopular: true,
    discountPercent: 0,
    specifications: {
      display: "1.5 inch AMOLED",
      battery: "40 hours",
      sensors: "Heart rate, SpO2, GPS",
      waterproof: "5ATM"
    }
  },
  {
    id: 8,
    slug: "coffee-maker",
    title_ru: "Кофеварка Delonghi",
    title_en: "Delonghi Coffee Maker",
    title_uz: "Delonghi Kofe mashinasi",
    description_ru: "Автоматическая кофеварка для приготовления эспрессо и капучино.",
    description_en: "Automatic coffee maker for espresso and cappuccino.",
    description_uz: "Espresso va kapuchino tayyorlash uchun avtomatik kofe mashinasi.",
    price: 449,
    oldPrice: 549,
    category: "appliances",
    subcategory: "kitchen",
    brand: "DeLonghi",
    rating: 4.8,
    reviewsCount: 178,
    images: [
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: true,
    discountPercent: 18,
    specifications: {
      capacity: "1.8L",
      pressure: "15 bar",
      power: "1450W",
      features: "Auto-frother, Timer"
    }
  },
  {
    id: 9,
    slug: "makeup-set",
    title_ru: "Набор косметики Professional",
    title_en: "Professional Makeup Set",
    title_uz: "Professional Kosmetika to'plami",
    description_ru: "Полный набор профессиональной декоративной косметики.",
    description_en: "Complete set of professional decorative cosmetics.",
    description_uz: "Professional dekorativ kosmetikaning to'liq to'plami.",
    price: 89,
    oldPrice: 129,
    category: "beauty",
    subcategory: "makeup",
    brand: "BeautyPro",
    rating: 4.5,
    reviewsCount: 267,
    images: [
      "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: false,
    discountPercent: 31,
    specifications: {
      items: "24 piece set",
      includes: "Eyeshadows, Lipsticks, Brushes",
      type: "Professional",
      case: "Included"
    }
  },
  {
    id: 10,
    slug: "kids-bicycle",
    title_ru: "Детский велосипед 16\"",
    title_en: "Kids Bicycle 16\"",
    title_uz: "Bolalar velosipedi 16\"",
    description_ru: "Яркий детский велосипед с боковыми колесами и корзинкой.",
    description_en: "Bright kids bicycle with training wheels and basket.",
    description_uz: "O'rgatish g'ildiraklari va savat bilan yorqin bolalar velosipedi.",
    price: 149,
    oldPrice: null,
    category: "kids",
    subcategory: "toys",
    brand: "KidsBike",
    rating: 4.6,
    reviewsCount: 89,
    images: [
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1149602/pexels-photo-1149602.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: true,
    isPopular: false,
    discountPercent: 0,
    specifications: {
      wheel_size: "16 inches",
      age: "4-7 years",
      frame: "Steel",
      extras: "Training wheels, Basket, Bell"
    }
  },
  {
    id: 11,
    slug: "yoga-mat",
    title_ru: "Коврик для йоги Premium",
    title_en: "Premium Yoga Mat",
    title_uz: "Premium Yoga gilami",
    description_ru: "Экологичный коврик для йоги с антискользящим покрытием.",
    description_en: "Eco-friendly yoga mat with non-slip surface.",
    description_uz: "Sirg'amaydigan sirt bilan ekologik yoga gilami.",
    price: 39,
    oldPrice: 59,
    category: "sports",
    subcategory: "fitness",
    brand: "YogaPro",
    rating: 4.7,
    reviewsCount: 312,
    images: [
      "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: true,
    discountPercent: 34,
    specifications: {
      size: "183 x 61 cm",
      thickness: "6mm",
      material: "TPE",
      features: "Non-slip, Eco-friendly"
    }
  },
  {
    id: 12,
    slug: "car-vacuum",
    title_ru: "Автомобильный пылесос",
    title_en: "Car Vacuum Cleaner",
    title_uz: "Avtomobil changyutgich",
    description_ru: "Компактный беспроводной пылесос для автомобиля.",
    description_en: "Compact wireless vacuum cleaner for car.",
    description_uz: "Avtomobil uchun ixcham simsiz changyutgich.",
    price: 79,
    oldPrice: 99,
    category: "auto",
    subcategory: "accessories",
    brand: "AutoClean",
    rating: 4.4,
    reviewsCount: 156,
    images: [
      "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: false,
    discountPercent: 20,
    specifications: {
      power: "120W",
      battery: "2000mAh",
      runtime: "30 minutes",
      features: "HEPA filter, LED light"
    }
  },
  {
    id: 13,
    slug: "desk-lamp",
    title_ru: "Настольная LED лампа",
    title_en: "LED Desk Lamp",
    title_uz: "LED Stol chirog'i",
    description_ru: "Современная настольная лампа с регулировкой яркости и температуры света.",
    description_en: "Modern desk lamp with brightness and color temperature adjustment.",
    description_uz: "Yorqinlik va rang haroratini sozlash bilan zamonaviy stol chirog'i.",
    price: 45,
    oldPrice: null,
    category: "electrical",
    subcategory: "lighting",
    brand: "LightTech",
    rating: 4.6,
    reviewsCount: 201,
    images: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: true,
    isPopular: false,
    discountPercent: 0,
    specifications: {
      power: "12W LED",
      modes: "5 brightness levels",
      temperature: "3000K-6000K",
      features: "Touch control, USB charging port"
    }
  },
  {
    id: 14,
    slug: "ceramic-dinnerware",
    title_ru: "Набор керамической посуды",
    title_en: "Ceramic Dinnerware Set",
    title_uz: "Keramik idishlar to'plami",
    description_ru: "Элегантный набор керамической посуды на 6 персон.",
    description_en: "Elegant ceramic dinnerware set for 6 persons.",
    description_uz: "6 kishi uchun nafis keramik idishlar to'plami.",
    price: 129,
    oldPrice: 179,
    category: "home",
    subcategory: "kitchenware",
    brand: "HomeStyle",
    rating: 4.7,
    reviewsCount: 145,
    images: [
      "https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: true,
    discountPercent: 28,
    specifications: {
      pieces: "24 pieces",
      material: "Ceramic",
      dishwasher: "Safe",
      microwave: "Safe"
    }
  },
  {
    id: 15,
    slug: "backpack",
    title_ru: "Рюкзак для ноутбука",
    title_en: "Laptop Backpack",
    title_uz: "Noutbuk uchun ryukzak",
    description_ru: "Вместительный рюкзак с отделением для ноутбука до 15.6\"",
    description_en: "Spacious backpack with compartment for laptop up to 15.6\"",
    description_uz: "15.6\" gacha noutbuk uchun katta ryukzak",
    price: 59,
    oldPrice: 89,
    category: "accessories",
    subcategory: "bags",
    brand: "TravelPro",
    rating: 4.5,
    reviewsCount: 278,
    images: [
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    isNew: false,
    isPopular: true,
    discountPercent: 34,
    specifications: {
      capacity: "30L",
      laptop: "Up to 15.6 inch",
      material: "Waterproof nylon",
      features: "USB charging port, Anti-theft pocket"
    }
  }
])
