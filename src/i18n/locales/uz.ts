import { ref } from "vue";

export const uz = ref({
  nav: {
    home: "Bosh sahifa",
    catalog: "Katalog",
    basket: "Savat",
    profile: "Profil"
  },
  home: {
    search: "Mahsulotlarni qidirish...",
    categories: "Kategoriyalar",
    popular: "Mashhur mahsulotlar",
    new: "Yangiliklar",
    deals: "Maxsus takliflar",
    recommended: "Siz uchun tavsiya qilamiz"
  },
  catalog: {
    title: "Katalog",
    all: "Barcha mahsulotlar",
    filter: "Filtr",
    sort: "Saralash",
    sortByPrice: "Narx bo'yicha",
    sortByPopularity: "Mashhurlik bo'yicha",
    sortByNew: "Yangilar",
    priceRange: "Narx oralig'i",
    inStock: "Faqat mavjud",
    apply: "Qo'llash",
    reset: "Tozalash",
    noProducts: "Mahsulotlar topilmadi"
  },
  product: {
    addToCart: "Savatga qo'shish",
    addToFavorites: "Sevimliga qo'shish",
    removeFromFavorites: "Sevimlilardan o'chirish",
    inStock: "Mavjud",
    outOfStock: "Mavjud emas",
    description: "Tavsif",
    specifications: "Xususiyatlari",
    reviews: "Sharhlar",
    similarProducts: "O'xshash mahsulotlar",
    brand: "Brend",
    rating: "Reyting",
    reviewsCount: "{count} sharh"
  },
  basket: {
    title: "Savat",
    empty: "Savatingiz bo'sh",
    continueShopping: "Xaridni davom ettirish",
    total: "Jami",
    discount: "Chegirma",
    checkout: "Rasmiylashtirish",
    remove: "O'chirish",
    quantity: "Miqdori"
  },
  profile: {
    title: "Profil",
    myOrders: "Mening buyurtmalarim",
    favorites: "Sevimlilar",
    settings: "Sozlamalar",
    language: "Til",
    theme: "Mavzu",
    lightMode: "Yorug' rejim",
    darkMode: "Qorong'u rejim",
    logout: "Chiqish",
    name: "Alisher Aliyev",
    ordersBadge: "Xaridlar tarixi",
    ordersSubtitle: "Bu yerda barcha rasmiylashtirilgan buyurtmalar va ularning holati ko‘rinadi",
    ordersCount: "Buyurtmalar",
    ordersEmptyTitle: "Sizda hali buyurtmalar yo‘q",
    ordersEmptyMessage: "Buyurtma rasmiylashtirilgandan keyin u avtomatik shu yerda paydo bo‘ladi",
    productsLabel: "ta mahsulot",
    deliveryInfo: "Qabul qiluvchi va yetkazib berish",
    subtotal: "Mahsulotlar summasi",
    paymentMethods: {
      card: "Karta orqali to‘lov",
      cash: "Naqd to‘lov"
    },
    orderStatuses: {
      new: "Yangi",
      processing: "Jarayonda",
      delivering: "Yo‘lda",
      completed: "Yakunlangan"
    }
  },
  common: {
    price: "Narx",
    discount: "Chegirma",
    save: "Saqlash",
    cancel: "Bekor qilish",
    close: "Yopish",
    viewAll: "Barchasini ko'rish",
    loadMore: "Yana yuklash"
  },
  checkout: {
    emptyTitle: "Hozircha rasmiylashtirish uchun mahsulot yo‘q",
    emptyMessage: "Davom etish uchun savatga mahsulot qo‘shing",
    contactInfo: "Kontakt ma’lumotlari",
    contactInfoHint: "Buyurtmani tasdiqlash uchun xaridor ma’lumotlari",
    fullName: "F.I.Sh.",
    fullNamePlaceholder: "To‘liq ismingizni kiriting",
    phone: "Telefon raqami",
    email: "Email",
    delivery: "Yetkazib berish ma’lumotlari",
    city: "Shahar",
    cityPlaceholder: "Shaharni kiriting",
    address: "Manzil",
    addressPlaceholder: "Ko‘cha, uy, xonadon",
    comment: "Buyurtma izohi",
    commentPlaceholder: "Podyezd, qavat, mo‘ljal yoki boshqa ma’lumotlar",
    payment: "To‘lov usuli",
    cardPayment: "Karta orqali to‘lov",
    cardPaymentHint: "Onlayn yoki qabul qilganda karta bilan to‘lash",
    cashPayment: "Naqd pul bilan to‘lov",
    cashPaymentHint: "Buyurtmani olganda naqd pul bilan to‘lash",
    orderSummary: "Buyurtmangiz",
    itemsCount: "Mahsulotlar",
    deliveryFee: "Yetkazib berish",
    free: "Bepul",
    confirmOrder: "Buyurtmani tasdiqlash",
    backToBasket: "Savatga qaytish",
    orderCreated: "Buyurtma muvaffaqiyatli rasmiylashtirildi"
  }
})
