'use client';

import { useState, useEffect } from 'react';
import en from '@/messages/en.json';
import fr from '@/messages/fr.json';

type Messages = { [key: string]: string | Messages | unknown };

const ALL: Record<'en' | 'fr', Messages> = {
  en: en as Messages,
  fr: fr as Messages,
};

export function useTranslations() {
  // Start with a safe synchronous default to avoid flashing keys
  const [locale, setLocale] = useState<'en' | 'fr'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage') as 'en' | 'fr' | null;
      if (saved === 'en' || saved === 'fr') return saved;
    }
    return 'en';
  });
  const [messages, setMessages] = useState<Messages>(() => ALL['en']);

  useEffect(() => {
    // Hydrate messages synchronously from bundled JSON to avoid any flash
    const saved = (localStorage.getItem('preferredLanguage') as 'en' | 'fr' | null) || 'en';
    setLocale(saved);
    setMessages(ALL[saved] || ALL.en);

    const handleLanguageChange = (e: Event) => {
      const detail = (e as CustomEvent<'en' | 'fr'>).detail;
      if (detail === 'en' || detail === 'fr') {
        setLocale(detail);
        setMessages(ALL[detail] || ALL.en);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () =>
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  const getByPath = (obj: unknown, path: string): unknown => {
    const keys = path.split('.');
    let value: unknown = obj as Messages;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return undefined;
      }
    }
    return value;
  };

  const t = (key: string): string => {
    const value = getByPath(messages, key);
    return typeof value === 'string' ? value : key;
  };

  const getRaw = <T = unknown>(key: string): T | undefined => {
    return getByPath(messages, key) as T | undefined;
  };

  return { t, locale, getRaw };
}
