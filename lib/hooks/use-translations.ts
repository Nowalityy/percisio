'use client';

import { useState, useEffect } from 'react';

type Messages = {
  [key: string]: string | Messages;
};

export function useTranslations() {
  const [locale, setLocale] = useState<'en' | 'fr'>('en');
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const loadMessages = async (lang: 'en' | 'fr') => {
      try {
        const msgs = await import(`@/messages/${lang}.json`);
        setMessages(msgs.default);
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    };

    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage') as 'en' | 'fr';
      const initialLocale = saved || 'en';
      setLocale(initialLocale);
      loadMessages(initialLocale);

      const handleLanguageChange = (e: CustomEvent) => {
        setLocale(e.detail);
        loadMessages(e.detail);
      };

      window.addEventListener('languageChange', handleLanguageChange as EventListener);
      return () =>
        window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: string | Messages = messages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, locale };
}
