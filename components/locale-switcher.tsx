'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '../i18n-config';
import { Languages } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');

    if (segments.length >= 2) {
      segments[1] = locale;
      return `/${segments.filter(Boolean).join('/')}`;
    }

    return `/${locale}/`;
  };

  const handleSelect = (value: Locale) => {
    const url = redirectedPathName(value);
    router.push(url);
  };

  const languageNames: Record<Locale, string> = {
    fi: 'Suomi',
    sv: 'Svenska',
    en: 'English',
  };

  const resolveLanguageName = (lang: Locale) => {
    return languageNames[lang] || 'Select a language'; // Provide a default placeholder if lang is not found
  };

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[120px]">
        <Languages />
        <SelectValue placeholder={resolveLanguageName(lang)} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {i18n.locales.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {resolveLanguageName(locale)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
