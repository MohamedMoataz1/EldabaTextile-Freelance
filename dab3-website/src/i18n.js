import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './i18n/en/translation.json';
import ar from './i18n/ar/translation.json';
import tr from './i18n/tr/translation.json';
const resources = {
    en: {
        translation:en
    },
    ar: {
        translation: ar
    },
    tr: {
        translation: tr
    },
};

const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:'en',
    detection: DETECTION_OPTIONS,
    interpolation:{
        escapeValue:false
    },
    resources
})