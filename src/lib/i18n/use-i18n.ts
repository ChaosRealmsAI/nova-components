'use client';

import { useCallback } from 'react';
import { useI18nStore } from '@/stores/i18n-store';
import { DEFAULT_LOCALE, type LocalizedText } from './config';
import { messages, type MessageKey } from './messages/index';

// 针对历史上写死在组件里的默认文案做一次兼容映射
// 保证这些默认标签也能参与多语言切换
const HARD_CODED_LABEL_TRANSLATIONS: Record<string, LocalizedText> = {
  'Email Address': {
    en: 'Email Address',
    zh: '邮箱地址',
  },
  Email: {
    en: 'Email',
    zh: '邮箱',
  },
  Password: {
    en: 'Password',
    zh: '密码',
  },
  'Sign In': {
    en: 'Sign In',
    zh: '登录',
  },
  'Nova Card': {
    en: 'Nova Card',
    zh: 'Nova 卡片',
  },
  'Login Form': {
    en: 'Login Form',
    zh: '登录表单',
  },
};

export function useI18n() {
  const locale = useI18nStore((state) => state.locale);
  const setLocale = useI18nStore((state) => state.setLocale);
  const toggleLocale = useI18nStore((state) => state.toggleLocale);

  const t = useCallback(
    (key: MessageKey, fallback?: string) => {
      const message = messages[key]?.[locale] ?? messages[key]?.[DEFAULT_LOCALE];
      return message ?? fallback ?? key;
    },
    [locale]
  );

  const translate = useCallback(
    (value: LocalizedText) => {
      const candidates: (keyof LocalizedText)[] = [];

      if (locale === 'zh-Hant') {
        candidates.push('zh-Hant', 'zh', 'zh-Hans');
      } else if (locale === 'zh' || locale === 'zh-Hans') {
        candidates.push('zh', 'zh-Hans', 'zh-Hant');
      } else {
        candidates.push(locale as keyof LocalizedText);
      }

      candidates.push(DEFAULT_LOCALE as keyof LocalizedText, 'en', 'zh', 'zh-Hans', 'zh-Hant');

      for (const key of candidates) {
        if (value[key]) return value[key] as string;
      }

      return '';
    },
    [locale]
  );

  const resolveLabel = useCallback(
    (label?: string, labelKey?: MessageKey) => {
      if (labelKey) return t(labelKey, label);

      if (label) {
        const localized = HARD_CODED_LABEL_TRANSLATIONS[label];
        if (localized) {
          const translated = translate(localized);
          if (translated) return translated;
        }
        return label;
      }

      return t('buttonLabelDefault');
    },
    [t, translate]
  );

  return { locale, setLocale, toggleLocale, t, translate, resolveLabel };
}
