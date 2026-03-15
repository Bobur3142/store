import { ref } from "vue";

export const ru = ref({
  nav: {
    home: "Главная",
    catalog: "Каталог",
    basket: "Корзина",
    profile: "Профиль"
  },
  home: {
    search: "Поиск товаров...",
    categories: "Категории",
    popular: "Популярные товары",
    new: "Новинки",
    deals: "Специальные предложения",
    recommended: "Рекомендуем для вас"
  },
  catalog: {
    title: "Каталог",
    all: "Все товары",
    filter: "Фильтр",
    sort: "Сортировка",
    sortByPrice: "По цене",
    sortByPopularity: "По популярности",
    sortByNew: "Новинки",
    priceRange: "Диапазон цен",
    inStock: "Только в наличии",
    apply: "Применить",
    reset: "Сбросить",
    noProducts: "Товары не найдены"
  },
  product: {
    addToCart: "В корзину",
    addToFavorites: "В избранное",
    removeFromFavorites: "Удалить из избранного",
    inStock: "В наличии",
    outOfStock: "Нет в наличии",
    description: "Описание",
    specifications: "Характеристики",
    reviews: "Отзывы",
    similarProducts: "Похожие товары",
    brand: "Бренд",
    rating: "Рейтинг",
    reviewsCount: "{count} отзывов"
  },
  basket: {
    title: "Корзина",
    empty: "Ваша корзина пуста",
    continueShopping: "Продолжить покупки",
    total: "Итого",
    discount: "Скидка",
    checkout: "Оформить заказ",
    remove: "Удалить",
    quantity: "Количество"
  },
  profile: {
    title: "Профиль",
    myOrders: "Мои заказы",
    favorites: "Избранное",
    settings: "Настройки",
    language: "Язык",
    theme: "Тема",
    lightMode: "Светлая тема",
    darkMode: "Темная тема",
    logout: "Выйти",
    name: "Иван Иванов",
    email: "ivan.ivanov@example.com",
    phone: "+7 900 123 45 67"
  },
  common: {
    price: "Цена",
    discount: "Скидка",
    save: "Сохранить",
    cancel: "Отмена",
    close: "Закрыть",
    viewAll: "Смотреть все",
    loadMore: "Загрузить еще"
  },
  checkout: {
    emptyTitle: "Пока нечего оформлять",
    emptyMessage: "Добавьте товары в корзину, чтобы продолжить",
    contactInfo: "Контактные данные",
    contactInfoHint: "Данные покупателя для подтверждения заказа",
    fullName: "ФИО",
    fullNamePlaceholder: "Введите ваше имя",
    phone: "Номер телефона",
    email: "Email",
    delivery: "Данные доставки",
    city: "Город",
    cityPlaceholder: "Введите город",
    address: "Адрес",
    addressPlaceholder: "Улица, дом, квартира",
    comment: "Комментарий к заказу",
    commentPlaceholder: "Подъезд, этаж, ориентир или другие детали",
    payment: "Способ оплаты",
    cardPayment: "Оплата картой",
    cardPaymentHint: "Онлайн или картой при получении",
    cashPayment: "Оплата наличными",
    cashPaymentHint: "Оплата наличными при получении заказа",
    orderSummary: "Ваш заказ",
    itemsCount: "Товаров",
    deliveryFee: "Доставка",
    free: "Бесплатно",
    confirmOrder: "Подтвердить заказ",
    backToBasket: "Вернуться в корзину"
  }
})
