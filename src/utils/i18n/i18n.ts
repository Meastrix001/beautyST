import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18n_en } from "./English";

const supportedLanguages = {
  en: "en",
};

const language = supportedLanguages[localStorage.getItem("i18nextLng")] || "en";

const resources = {
  en: {
    translation: i18n_en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
