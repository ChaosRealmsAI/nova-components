export const SUPPORTED_LOCALES = [
  'en',      // English
  'zh-Hans', // Chinese (Simplified)
  'zh-Hant', // Chinese (Traditional)
  'zh',      // Chinese (alias for compatibility)
  'hi',      // Hindi
  'es',      // Spanish
  'fr',      // French
  'ar',      // Arabic
  'bn',      // Bengali
  'pt',      // Portuguese
  'ru',      // Russian
  'ur',      // Urdu
  'id',      // Indonesian
  'de',      // German
  'ja',      // Japanese
  'ko',      // Korean
] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

// 浏览器语言到支持语言的映射
const BROWSER_LOCALE_MAP: Record<string, Locale> = {
  'zh-CN': 'zh-Hans',
  'zh-SG': 'zh-Hans',
  'zh-TW': 'zh-Hant',
  'zh-HK': 'zh-Hant',
  'zh-MO': 'zh-Hant',
};

// 检测浏览器语言并匹配到支持的语言
export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const browserLangs = navigator.languages ?? [navigator.language];

  for (const lang of browserLangs) {
    // 1. 精确匹配（如 zh-Hans）
    if (SUPPORTED_LOCALES.includes(lang as Locale)) {
      return lang as Locale;
    }

    // 2. 映射匹配（如 zh-CN → zh-Hans）
    if (BROWSER_LOCALE_MAP[lang]) {
      return BROWSER_LOCALE_MAP[lang];
    }

    // 3. 前缀匹配（如 en-US → en）
    const prefix = lang.split('-')[0];
    if (SUPPORTED_LOCALES.includes(prefix as Locale)) {
      return prefix as Locale;
    }
  }

  return DEFAULT_LOCALE;
}

// en 为必填，其余语言可选，未提供时会自动回退
export type LocalizedText = { en: string } & Partial<Record<Locale, string>>;

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇺🇸',
  'zh-Hans': '🇨🇳',
  'zh-Hant': '🇨🇳',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷',
  es: '🇪🇸',
  hi: '🇮🇳',
  fr: '🇫🇷',
  ar: '🇸🇦',
  bn: '🇧🇩',
  pt: '🇵🇹',
  ru: '🇷🇺',
  ur: '🇵🇰',
  id: '🇮🇩',
  de: '🇩🇪',
};
