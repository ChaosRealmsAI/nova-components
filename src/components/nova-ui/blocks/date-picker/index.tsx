'use client';

/**
 * DatePicker Block
 * 日期选择器组件
 * 依赖 Atoms: popover, button
 * 依赖 Blocks: calendar
 */

import * as React from 'react';
import { format } from 'date-fns';
import { zhCN, zhTW, ja, ko, es, fr, de, pt, ru, ar, enUS } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';
import { Calendar } from '@/components/nova-ui/blocks/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/nova-ui/atmos/popover';
import { datePickerBaseConfig } from './date-picker.config';

// Locale map for date-fns formatting
const localeMap: Record<string, typeof enUS> = {
  en: enUS,
  'zh-Hans': zhCN,
  'zh-Hant': zhTW,
  zh: zhCN,
  ja: ja,
  ko: ko,
  es: es,
  fr: fr,
  de: de,
  pt: pt,
  ru: ru,
  ar: ar,
};

// ============================================================================
// 依赖声明
// ============================================================================

export const datePickerAtoms = ['popover', 'button', 'calendar'] as const;

export { datePickerBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const datePicker = tv(datePickerBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type DatePickerVariants = VariantProps<typeof datePicker>;
export type DatePickerSlots = keyof typeof datePickerBaseConfig.slots;
export type DatePickerClassNames = Partial<Record<DatePickerSlots, string>>;

export interface DatePickerProps extends React.ComponentProps<typeof Popover> {
  date?: Date;
  setDate?: (date?: Date) => void;
  classNames?: DatePickerClassNames;
  placeholder?: string;
}

export interface DatePickerDemoProps extends DatePickerVariants {
  placeholder?: string;
}

// ============================================================================
// Component
// ============================================================================

function DatePicker({
  date,
  setDate,
  classNames,
  placeholder,
  children,
  ...props
}: DatePickerProps) {
  const { currentTheme } = useTheme();
  const { t, locale: i18nLocale } = useI18n();
  const themeConfig = currentTheme?.components?.DatePicker;
  const styles = datePicker({});

  // Get locale for date formatting
  const dateLocale = localeMap[i18nLocale] || enUS;
  const displayPlaceholder = placeholder || t('datePickerPlaceholder', 'Pick a date');

  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            styles.trigger(),
            !date && "text-muted-foreground",
            themeConfig?.slots?.trigger,
            classNames?.trigger
          )}
        >
          <CalendarIcon className={cn(styles.icon(), themeConfig?.slots?.icon)} />
          {date ? format(date, "PPP", { locale: dateLocale }) : <span>{displayPlaceholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(styles.content(), themeConfig?.slots?.content, classNames?.content)}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

// ============================================================================
// Demo
// ============================================================================

function DatePickerDemo({ placeholder }: DatePickerDemoProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <DatePicker date={date} setDate={setDate} />
    </div>
  );
}

export { DatePicker, DatePickerDemo };
