import { useEffect, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@context/LanguageContext";


const htmlLangMap: Record<string, string> = {
  zh_Hant: "zh-Hant",
  en: "en",
  ja: "ja"
};

export const LanguageProvider = ({ children }: { children: ReactElement }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const currentLang = i18n.language;

    document.documentElement.lang =
      htmlLangMap[currentLang] ?? currentLang;

    localStorage.setItem("i18nextLng", currentLang);
  }, [i18n.language]);

  return (
    <LanguageContext.Provider value={{ currentLang: i18n.language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};