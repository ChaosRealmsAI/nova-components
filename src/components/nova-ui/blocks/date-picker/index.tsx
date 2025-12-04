'use client';

/**
 * DatePicker Block
 *
 * 日期选择器组件
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover, button
 * - Block 组件，依赖 Blocks: calendar
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { format } from 'date-fns';
import { zhCN, zhTW, ja, ko, es, fr, de, pt, ru, ar, enUS } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';
import { Calendar } from '@/components/nova-ui/blocks/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/nova-ui/atmos/popover';

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
// 依赖声明（用于导出时收集）
// ============================================================================

export const datePickerAtoms = ['popover', 'button'] as const;
export const datePickerBlocks = ['calendar'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const datePickerBase = tv({
  slots: {
    trigger: 'justify-start text-left font-normal',
    content: 'w-auto p-0',
    icon: 'mr-2 h-4 w-4',
  },
});

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// Types
// ============================================================================

export type DatePickerVariants = VariantProps<typeof datePickerBase>;
export type DatePickerSlots = keyof ReturnType<typeof datePickerBase>;
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

  // L1: 功能层
  const base = datePickerBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    trigger: toClassString(themeConfig?.slots?.trigger),
    content: toClassString(themeConfig?.slots?.content),
    icon: toClassString(themeConfig?.slots?.icon),
  }), [themeConfig]);

  // Get locale for date formatting
  const dateLocale = localeMap[i18nLocale] || enUS;
  const displayPlaceholder = placeholder || t('datePickerPlaceholder', 'Pick a date');

  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={twMerge(
            'w-[280px]',
            base.trigger(),
            themeStyles.trigger,
            !date && "text-muted-foreground",
            classNames?.trigger
          )}
        >
          <CalendarIcon
            className={twMerge(
              base.icon(),
              themeStyles.icon,
              classNames?.icon
            )}
          />
          {date ? format(date, "PPP", { locale: dateLocale }) : <span>{displayPlaceholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={twMerge(
          base.content(),
          themeStyles.content,
          classNames?.content
        )}
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
// Demo (用于画布展示)
// ============================================================================

function DatePickerDemo({ placeholder }: DatePickerDemoProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <DatePicker date={date} setDate={setDate} placeholder={placeholder} />
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { DatePicker, DatePickerDemo };
