import { useEffect, type ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { LanguageContext } from "@context/LanguageContext";


interface LanguageProviderProps {
  children: ReactElement;
}

const HTML_LANG_MAP: Record<string, string> = {
  zh_Hant: "zh-Hant",
  en: "en",
  ja: "ja"
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const currentLang = i18n.language;

    document.documentElement.lang =
      HTML_LANG_MAP[currentLang] ?? currentLang;

    localStorage.setItem("i18nextLng", currentLang);
  }, [i18n.language]);

  return (
    <LanguageContext.Provider value={{ currentLang: i18n.language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
