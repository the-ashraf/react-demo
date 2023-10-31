import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json'
import ar from './locales/ar.json'

const resources = {
    en: {
        translation: en
    },
    ar: {
        translation: ar
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: { useSuspense: false },
    });

i18n.on("languageChanged", lng => {
    document.documentElement.setAttribute("lang", lng);
    document.documentElement.dir = lng === 'ar' ? "rtl" : "ltr";
});

export default i18n;