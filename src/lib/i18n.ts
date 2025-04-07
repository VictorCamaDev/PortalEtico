import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Importamos las traducciones desde los archivos JSON
import translationES from "../locales/es.json"
import translationEN from "../locales/en.json"

// Recursos de traducción
const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
}

i18n
  // Detecta el idioma del navegador
  .use(LanguageDetector)
  // Pasa el i18n a react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n

