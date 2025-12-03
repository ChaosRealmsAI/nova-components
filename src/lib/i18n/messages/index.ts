import type { Locale } from '../config';
import { commonMessages } from './common';
import { canvasMessages } from './canvas';
import { inspectorMessages } from './inspector';
import { drawerMessages } from './drawer';
import { devmodeMessages } from './devmode';
import { previewMessages } from './preview';
import { themesMessages } from './themes';
import { componentsMessages } from './components';

const MESSAGES_BY_KEY = {
  ...commonMessages,
  ...canvasMessages,
  ...inspectorMessages,
  ...drawerMessages,
  ...devmodeMessages,
  ...previewMessages,
  ...themesMessages,
  ...componentsMessages,
} as const;

export type MessageKey = keyof typeof MESSAGES_BY_KEY;

export { MESSAGES_BY_KEY };

// Re-export for compatibility with existing use-i18n
import { SUPPORTED_LOCALES } from '../config';

export const messages = MESSAGES_BY_KEY as unknown as Record<MessageKey, Record<Locale, string>>;

// LocalizedMessage 表示 MESSAGES_BY_KEY 中每个 key 对应的值类型
type LocalizedMessage = Record<Locale, string>;

export const MESSAGES: Record<Locale, Record<MessageKey, string>> = (() => {
  const result = {} as Record<Locale, Record<MessageKey, string>>;

  for (const locale of SUPPORTED_LOCALES) {
    const entries: [MessageKey, string][] = Object.entries(MESSAGES_BY_KEY).map(
      ([key, value]) => [key as MessageKey, (value as LocalizedMessage)[locale]]
    );
    result[locale] = Object.fromEntries(entries) as Record<MessageKey, string>;
  }

  return result;
})();
