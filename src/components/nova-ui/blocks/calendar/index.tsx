'use client';

/**
 * Calendar Block
 *
 * 日历组件，用于日期选择和展示。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: button
 * - 使用 react-day-picker 作为基础
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
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { DayPicker, DayButton, getDefaultClassNames } from 'react-day-picker';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';

// Date-fns locales for react-day-picker
import { zhCN, zhTW, ja, ko, es, fr, de, pt, ru, ar, enUS } from 'date-fns/locale';

// Locale map
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

export const calendarAtoms = ['button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const calendarBase = tv({
  slots: {
    root: 'p-3',
    months: 'flex flex-col sm:flex-row gap-2',
    month: 'flex flex-col gap-4',
    caption: 'flex justify-center pt-1 relative items-center w-full',
    captionLabel: 'text-sm font-medium truncate',
    nav: 'flex items-center gap-1',
    navButton: 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50',
    navButtonPrevious: 'absolute left-1',
    navButtonNext: 'absolute right-1',
    table: 'w-full border-collapse space-x-1',
    headRow: 'flex',
    headCell: 'rounded-md w-8 font-normal text-[0.8rem]',
    row: 'flex w-full mt-2',
    cell: 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
    day: 'size-8 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50',
    daySelected: '',
    dayToday: '',
    dayOutside: 'day-outside opacity-50',
    dayDisabled: 'opacity-50',
    dayHidden: 'invisible',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default',
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

export type CalendarVariants = VariantProps<typeof calendarBase>;
export type CalendarSlots = keyof typeof calendarBase.slots;
export type CalendarClassNames = Partial<Record<CalendarSlots, string>>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> &
  CalendarVariants & {
    classNames?: CalendarClassNames;
  };

export interface CalendarDemoProps extends CalendarVariants {}

// ============================================================================
// Calendar Day Button
// ============================================================================

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={twMerge(
        'size-8 p-0 font-normal',
        'data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground',
        'data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground',
        'data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground',
        'data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground',
        'hover:bg-accent hover:text-accent-foreground',
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Calendar
// ============================================================================

function Calendar({
  className,
  classNames: customClassNames,
  showOutsideDays = true,
  variant = 'default',
  locale: propLocale,
  ...props
}: CalendarProps) {
  const { currentTheme } = useTheme();
  const { locale: i18nLocale } = useI18n();
  const themeConfig = currentTheme?.components?.Calendar;

  // L1: 功能层
  const base = calendarBase({ variant });

  // Get locale from props, i18n context, or fallback to English
  const locale = propLocale || localeMap[i18nLocale] || enUS;

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(() => ({
    root: toClassString(themeConfig?.slots?.root),
    months: toClassString(themeConfig?.slots?.months),
    month: toClassString(themeConfig?.slots?.month),
    caption: toClassString(themeConfig?.slots?.caption),
    captionLabel: toClassString(themeConfig?.slots?.captionLabel),
    nav: toClassString(themeConfig?.slots?.nav),
    navButton: toClassString(themeConfig?.slots?.navButton),
    navButtonPrevious: toClassString(themeConfig?.slots?.navButtonPrevious),
    navButtonNext: toClassString(themeConfig?.slots?.navButtonNext),
    table: toClassString(themeConfig?.slots?.table),
    headRow: toClassString(themeConfig?.slots?.headRow),
    headCell: toClassString(themeConfig?.slots?.headCell),
    row: toClassString(themeConfig?.slots?.row),
    cell: toClassString(themeConfig?.slots?.cell),
    day: toClassString(themeConfig?.slots?.day),
    daySelected: toClassString(themeConfig?.slots?.daySelected),
    dayToday: toClassString(themeConfig?.slots?.dayToday),
    dayOutside: toClassString(themeConfig?.slots?.dayOutside),
    dayDisabled: toClassString(themeConfig?.slots?.dayDisabled),
    dayHidden: toClassString(themeConfig?.slots?.dayHidden),
  }), [themeConfig]);

  // L3: 实例层 (className, classNames)
  const defaultClassNames = getDefaultClassNames();

  // 合并: L1 + L2 + L3
  const rootClass = twMerge(
    base.root(),
    themeStyles.root,
    customClassNames?.root,
    className
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={locale}
      className={twMerge('w-fit', defaultClassNames.root, rootClass)}
      classNames={{
        months: twMerge(base.months(), themeStyles.months, customClassNames?.months, defaultClassNames.months),
        month: twMerge(base.month(), themeStyles.month, customClassNames?.month, defaultClassNames.month),
        month_caption: twMerge(base.caption(), themeStyles.caption, customClassNames?.caption, defaultClassNames.month_caption),
        caption_label: twMerge(base.captionLabel(), themeStyles.captionLabel, customClassNames?.captionLabel, defaultClassNames.caption_label),
        nav: twMerge(base.nav(), themeStyles.nav, customClassNames?.nav, defaultClassNames.nav),
        button_previous: twMerge(base.navButton(), base.navButtonPrevious(), themeStyles.navButton, themeStyles.navButtonPrevious, customClassNames?.navButton, customClassNames?.navButtonPrevious, defaultClassNames.button_previous),
        button_next: twMerge(base.navButton(), base.navButtonNext(), themeStyles.navButton, themeStyles.navButtonNext, customClassNames?.navButton, customClassNames?.navButtonNext, defaultClassNames.button_next),
        weekdays: twMerge(base.headRow(), themeStyles.headRow, customClassNames?.headRow, defaultClassNames.weekdays),
        weekday: twMerge(base.headCell(), themeStyles.headCell, customClassNames?.headCell, defaultClassNames.weekday),
        week: twMerge(base.row(), themeStyles.row, customClassNames?.row, defaultClassNames.week),
        day: twMerge(base.cell(), themeStyles.cell, customClassNames?.cell, defaultClassNames.day),
        day_button: twMerge(base.day(), themeStyles.day, customClassNames?.day, defaultClassNames.day_button),
        selected: twMerge(base.daySelected(), themeStyles.daySelected, customClassNames?.daySelected),
        today: twMerge(base.dayToday(), themeStyles.dayToday, customClassNames?.dayToday, defaultClassNames.today),
        outside: twMerge(base.dayOutside(), themeStyles.dayOutside, customClassNames?.dayOutside, defaultClassNames.outside),
        disabled: twMerge(base.dayDisabled(), themeStyles.dayDisabled, customClassNames?.dayDisabled, defaultClassNames.disabled),
        hidden: twMerge(base.dayHidden(), themeStyles.dayHidden, customClassNames?.dayHidden, defaultClassNames.hidden),
      }}
      components={{
        Chevron: ({ orientation, ...chevronProps }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className="size-4" {...chevronProps} />;
          }
          return <ChevronRightIcon className="size-4" {...chevronProps} />;
        },
        DayButton: CalendarDayButton,
      }}
      {...props}
    />
  );
}

// ============================================================================
// Calendar Demo (用于画布展示)
// ============================================================================

function CalendarDemo({
  variant = 'default',
}: CalendarDemoProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        variant={variant}
      />
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Calendar,
  CalendarDayButton,
  CalendarDemo,
};
