"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Dictionary, Language } from "@/types/i18n";
import { es } from "@/dictionaries/es";
import { en } from "@/dictionaries/en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const dictionaries: Record<Language, Dictionary> = {
  es,
  en,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("preferred-language") as Language | null;
      if (savedLang === "es" || savedLang === "en") {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.startsWith("es") ? "es" : "en";
        setLanguageState(browserLang);
      }
    } catch {
      // Safe fallback if localStorage is disabled or restricted
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred-language", lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore storage error
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dict: dictionaries[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
