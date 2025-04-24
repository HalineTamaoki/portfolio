import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/en.json'
import translationES from './es/es.json'
import translationPTBR from './pt-br/pt-br.json'


const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  ptBr: { translation: translationPTBR },
};

if(!localStorage.getItem('i18nextLng')) {
  localStorage.setItem('i18nextLng', 'en');
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: 'translation',
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
  });

export default i18n;