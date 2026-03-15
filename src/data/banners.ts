import { ref } from "vue";

export const banners = ref([
  {
    id: 1,
    title_ru: "Весенняя распродажа",
    title_en: "Spring Sale",
    title_uz: "Bahor sotish",
    subtitle_ru: "Скидки до 50%",
    subtitle_en: "Up to 50% off",
    subtitle_uz: "50% gacha chegirma",
    color: "bg-gradient-to-r from-black to-rose-500"
  },
  {
    id: 2,
    title_ru: "Новая коллекция",
    title_en: "New Collection",
    title_uz: "Yangi kolleksiya",
    subtitle_ru: "Электроника 2026",
    subtitle_en: "Electronics 2026",
    subtitle_uz: "Elektronika 2026",
    color: "bg-gradient-to-r from-black to-cyan-500"
  },
  {
    id: 3,
    title_ru: "Быстрая доставка",
    title_en: "Fast Delivery",
    title_uz: "Tez yetkazish",
    subtitle_ru: "В тот же день",
    subtitle_en: "Same day",
    subtitle_uz: "Shu kuni",
    color: "bg-gradient-to-r from-black to-emerald-500"
  }
])
