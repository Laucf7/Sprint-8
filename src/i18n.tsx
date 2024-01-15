import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import ca from "../locales/cat/translation.json"
import es from "../locales/esp/translation.json"
import en from "../locales/en/translation.json"

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng:'cat'
    });

    export default i18n;