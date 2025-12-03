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
 */

import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { DayPicker, DayButton, getDefaultClassNames } from 'react-day-picker';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';
import { calendarBaseConfig } from './calendar.config';

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

export { calendarBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const calendar = tv(calendarBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type CalendarVariants = VariantProps<typeof calendar>;
export type CalendarSlots = keyof typeof calendarBaseConfig.slots;
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
      className={cn(
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
  const calendarThemeConfig = currentTheme?.components?.Calendar;
  const styles = calendar({ variant });
  const defaultClassNames = getDefaultClassNames();

  // Get locale from props, i18n context, or fallback to English
  const locale = propLocale || localeMap[i18nLocale] || enUS;

  // Merge theme classNames
  const mergedClassNames = React.useMemo(() => {
    const themeSlots = calendarThemeConfig?.slots || {};
    return {
      root: cn(
        customClassNames?.root || styles.root(),
        themeSlots.root,
      ),
      months: cn(
        customClassNames?.months || styles.months(),
        themeSlots.months,
      ),
      month: cn(
        customClassNames?.month || styles.month(),
        themeSlots.month,
      ),
      caption: cn(
        customClassNames?.caption || styles.caption(),
        themeSlots.caption,
      ),
      captionLabel: cn(
        customClassNames?.captionLabel || styles.captionLabel(),
        themeSlots.captionLabel,
      ),
      nav: cn(
        customClassNames?.nav || styles.nav(),
        themeSlots.nav,
      ),
      navButton: cn(
        customClassNames?.navButton || styles.navButton(),
        themeSlots.navButton,
      ),
      navButtonPrevious: cn(
        customClassNames?.navButtonPrevious || styles.navButtonPrevious(),
        themeSlots.navButtonPrevious,
      ),
      navButtonNext: cn(
        customClassNames?.navButtonNext || styles.navButtonNext(),
        themeSlots.navButtonNext,
      ),
      table: cn(
        customClassNames?.table || styles.table(),
        themeSlots.table,
      ),
      headRow: cn(
        customClassNames?.headRow || styles.headRow(),
        themeSlots.headRow,
      ),
      headCell: cn(
        customClassNames?.headCell || styles.headCell(),
        themeSlots.headCell,
      ),
      row: cn(
        customClassNames?.row || styles.row(),
        themeSlots.row,
      ),
      cell: cn(
        customClassNames?.cell || styles.cell(),
        themeSlots.cell,
      ),
      day: cn(
        customClassNames?.day || styles.day(),
        themeSlots.day,
      ),
      daySelected: cn(
        customClassNames?.daySelected || styles.daySelected(),
        themeSlots.daySelected,
      ),
      dayToday: cn(
        customClassNames?.dayToday || styles.dayToday(),
        themeSlots.dayToday,
      ),
      dayOutside: cn(
        customClassNames?.dayOutside || styles.dayOutside(),
        themeSlots.dayOutside,
      ),
      dayDisabled: cn(
        customClassNames?.dayDisabled || styles.dayDisabled(),
        themeSlots.dayDisabled,
      ),
      dayHidden: cn(
        customClassNames?.dayHidden || styles.dayHidden(),
        themeSlots.dayHidden,
      ),
    };
  }, [customClassNames, styles, calendarThemeConfig]);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={locale}
      className={cn(mergedClassNames.root, className)}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(mergedClassNames.months, defaultClassNames.months),
        month: cn(mergedClassNames.month, defaultClassNames.month),
        month_caption: cn(mergedClassNames.caption, defaultClassNames.month_caption),
        caption_label: cn(mergedClassNames.captionLabel, defaultClassNames.caption_label),
        nav: cn(mergedClassNames.nav, defaultClassNames.nav),
        button_previous: cn(mergedClassNames.navButton, mergedClassNames.navButtonPrevious, defaultClassNames.button_previous),
        button_next: cn(mergedClassNames.navButton, mergedClassNames.navButtonNext, defaultClassNames.button_next),
        weekdays: cn(mergedClassNames.headRow, defaultClassNames.weekdays),
        weekday: cn(mergedClassNames.headCell, defaultClassNames.weekday),
        week: cn(mergedClassNames.row, defaultClassNames.week),
        day: cn(mergedClassNames.cell, defaultClassNames.day),
        day_button: cn(mergedClassNames.day, defaultClassNames.day_button),
        selected: cn(mergedClassNames.daySelected),
        today: cn(mergedClassNames.dayToday, defaultClassNames.today),
        outside: cn(mergedClassNames.dayOutside, defaultClassNames.outside),
        disabled: cn(mergedClassNames.dayDisabled, defaultClassNames.disabled),
        hidden: cn(mergedClassNames.dayHidden, defaultClassNames.hidden),
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
