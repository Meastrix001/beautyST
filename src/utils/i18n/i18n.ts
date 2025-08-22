"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18n_en } from "./English";
import { i18n_est } from "./Estonian";

const supportedLanguages = {
  en: "en",
  est: "est",
};

const language = supportedLanguages["est"];

const resources = {
  en: {
    translation: i18n_en,
  },
  est: {
    translation: i18n_est,
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
