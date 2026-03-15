import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';
import { en } from '../i18n/locales/en'
import { ru } from '../i18n/locales/ru'
import { uz } from '../i18n/locales/uz'

export default defineBoot(({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || 'ru',
    fallbackLocale: 'en',
    messages: {
      en,
      ru,
      uz
    }
  });

  // Set i18n instance on app
  app.use(i18n);
});
