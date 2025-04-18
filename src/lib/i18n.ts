
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from "../locales/es.json";
import translationEN from "../locales/en.json";

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;