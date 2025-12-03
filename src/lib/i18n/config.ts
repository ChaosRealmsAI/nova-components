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
