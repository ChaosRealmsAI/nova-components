import type { Locale } from './config';
import { LOCALE_FLAGS } from './config';

export interface LanguageMeta {
  code: Locale;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageMeta[] = [
  { code: 'en', name: 'English', flag: LOCALE_FLAGS.en },
  { code: 'zh-Hans', name: '简体中文', flag: LOCALE_FLAGS['zh-Hans'] },
  { code: 'zh-Hant', name: '繁體中文', flag: LOCALE_FLAGS['zh-Hant'] },
  { code: 'hi', name: 'हिन्दी', flag: LOCALE_FLAGS.hi },
  { code: 'es', name: 'Español', flag: LOCALE_FLAGS.es },
  { code: 'fr', name: 'Français', flag: LOCALE_FLAGS.fr },
  { code: 'ar', name: 'العربية', flag: LOCALE_FLAGS.ar },
  { code: 'bn', name: 'বাংলা', flag: LOCALE_FLAGS.bn },
  { code: 'pt', name: 'Português', flag: LOCALE_FLAGS.pt },
  { code: 'ru', name: 'Русский', flag: LOCALE_FLAGS.ru },
  { code: 'ur', name: 'اردو', flag: LOCALE_FLAGS.ur },
  { code: 'id', name: 'Bahasa Indonesia', flag: LOCALE_FLAGS.id },
  { code: 'de', name: 'Deutsch', flag: LOCALE_FLAGS.de },
  { code: 'ja', name: '日本語', flag: LOCALE_FLAGS.ja },
  { code: 'ko', name: '한국어', flag: LOCALE_FLAGS.ko },
];
