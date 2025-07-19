'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Language } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => Promise<void>;
  isRTL: boolean;
  t: (key: string) => string;
  isLanguageChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  useEffect(() => {
    // Load saved language preference
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      const initialLanguage = savedLanguage || 'en';
      
      setLanguage(initialLanguage);
      
      // Set direction based on language
      const direction = initialLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
      document.documentElement.lang = initialLanguage;
    }
  }, []);

  const handleLanguageChange = async (lang: Language) => {
    if (lang === language) return;
    
    setIsLanguageChanging(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      // Set direction based on language
      const direction = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
      document.documentElement.lang = lang;
    }
    
    setTimeout(() => {
      setIsLanguageChanging(false);
    }, 300);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleLanguageChange,
        isRTL: language === 'ar',
        t,
        isLanguageChanging,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}