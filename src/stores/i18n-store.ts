'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, detectBrowserLocale, type Locale } from '@/lib/i18n/config';

interface I18nStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

// 获取初始语言：优先使用浏览器语言，localStorage 保存的值会在 hydration 时覆盖
const getInitialLocale = (): Locale => {
  // SSR 环境下返回默认值
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }
  return detectBrowserLocale();
};

export const useI18nStore = create<I18nStore>()(
  persist(
    (set) => ({
      locale: getInitialLocale(),
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
