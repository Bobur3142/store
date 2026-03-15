import { ref } from "vue";

export const reviews = ref([
  {
    id: 1,
    productId: 1,
    userName: "Алексей",
    rating: 5,
    comment_ru: "Отличный телефон! Быстрая работа, отличная камера.",
    comment_en: "Great phone! Fast performance, excellent camera.",
    comment_uz: "Ajoyib telefon! Tez ishlaydi, zo'r kamera.",
    date: "2026-02-15"
  },
  {
    id: 2,
    productId: 1,
    userName: "Мария",
    rating: 5,
    comment_ru: "Очень доволен покупкой. Рекомендую!",
    comment_en: "Very satisfied with the purchase. Recommend!",
    comment_uz: "Xariddan juda mamnunman. Tavsiya qilaman!",
    date: "2026-02-20"
  },
  {
    id: 3,
    productId: 2,
    userName: "Дмитрий",
    rating: 5,
    comment_ru: "S Pen - просто находка. Камера невероятная.",
    comment_en: "S Pen is a lifesaver. Camera is incredible.",
    comment_uz: "S Pen - ajoyib. Kamera aql bovar qilmaydigan.",
    date: "2026-02-18"
  },
  {
    id: 4,
    productId: 3,
    userName: "Екатерина",
    rating: 5,
    comment_ru: "Идеальный ноутбук для работы. Тихий и быстрый.",
    comment_en: "Perfect laptop for work. Quiet and fast.",
    comment_uz: "Ish uchun ideal noutbuk. Jim va tez.",
    date: "2026-02-10"
  },
  {
    id: 5,
    productId: 4,
    userName: "Игорь",
    rating: 4,
    comment_ru: "Хорошее шумоподавление, удобные.",
    comment_en: "Good noise cancellation, comfortable.",
    comment_uz: "Yaxshi shovqin bekor qilish, qulay.",
    date: "2026-02-25"
  }
])
