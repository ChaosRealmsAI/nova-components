'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/lib/i18n/config';

interface I18nStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

export const useI18nStore = create<I18nStore>()(
  persist(
    (set) => ({
      locale: DEFAULT_LOCALE,
      setLocale: (locale) => set({ locale }),
      toggleLocale: () =>
        set((state) => {
          const currentIndex = SUPPORTED_LOCALES.indexOf(state.locale);
          const nextLocale = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length];
          return { locale: nextLocale };
        }),
    }),
    {
      name: 'nova-locale',
    }
  )
);
