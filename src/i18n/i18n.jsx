// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/portfolio/locales/{{lng}}/translation.json", // Asegúrate de que esta ruta es correcta
        },
    });

export default i18n;
