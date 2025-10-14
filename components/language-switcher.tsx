'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage') as 'en' | 'fr';
      if (saved) {
        setLocale(saved);
      } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('fr')) {
          setLocale('fr');
        }
      }
    }
  }, []);

  const switchLanguage = (newLocale: 'en' | 'fr') => {
    setLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', newLocale);
      window.dispatchEvent(new CustomEvent('languageChange', { detail: newLocale }));
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1.5 font-semibold">
          <Globe className="h-4 w-4" />
          {locale.toUpperCase()}
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50">
        <DropdownMenuItem onClick={() => switchLanguage('en')}>
          <span className="flex items-center gap-2">
            English
            {locale === 'en' && <span className="text-primary ml-auto">✓</span>}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('fr')}>
          <span className="flex items-center gap-2">
            Français
            {locale === 'fr' && <span className="text-primary ml-auto">✓</span>}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
