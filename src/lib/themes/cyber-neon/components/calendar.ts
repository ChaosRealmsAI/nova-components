/**
 * Calendar Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Calendar"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Selected: Neon glow on selected day
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const calendarConfig = {
  slots: {
    /**
     * root: 日历根容器
     */
    root: [
      'rounded-[4px] border border-primary',
      'bg-surface-1',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'p-3',
    ],

    /**
     * months: 月份容器
     */
    months: [],

    /**
     * month: 单个月份
     */
    month: [
      'space-y-4',
    ],

    /**
     * caption: 标题区域
     */
    caption: [
      'flex justify-center pt-1 relative items-center',
    ],

    /**
     * captionLabel: 月份标签
     */
    captionLabel: [
      'text-sm font-medium',
      'text-foreground',
    ],

    /**
     * nav: 导航区域
     */
    nav: [
      'space-x-1 flex items-center',
    ],

    /**
     * navButton: 导航按钮
     */
    navButton: [
      'h-7 w-7 bg-transparent p-0 opacity-50',
      'hover:opacity-100',
      'hover:bg-surface-2',
      'hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * navButtonPrevious: 上一月按钮
     */
    navButtonPrevious: [
      'absolute left-1',
    ],

    /**
     * navButtonNext: 下一月按钮
     */
    navButtonNext: [
      'absolute right-1',
    ],

    /**
     * table: 日期表格
     */
    table: [
      'w-full border-collapse space-y-1',
    ],

    /**
     * headRow: 表头行
     */
    headRow: [
      'flex',
    ],

    /**
     * headCell: 表头单元格
     */
    headCell: [
      'text-muted-foreground rounded-[4px] w-9 font-normal text-[0.8rem]',
    ],

    /**
     * row: 日期行
     */
    row: [
      'flex w-full mt-2',
    ],

    /**
     * cell: 日期单元格
     */
    cell: [
      'h-9 w-9 text-center text-sm p-0 relative',
      '[&:has([aria-selected].day-range-end)]:rounded-r-[4px]',
      '[&:has([aria-selected].day-outside)]:bg-surface-2/50',
      '[&:has([aria-selected])]:bg-surface-2',
      'first:[&:has([aria-selected])]:rounded-l-[4px]',
      'last:[&:has([aria-selected])]:rounded-r-[4px]',
      'focus-within:relative focus-within:z-20',
    ],

    /**
     * day: 日期按钮
     * ─────────────────────────────────────────────────────────────────────
     * hover 时发光，选中时强发光
     */
    day: [
      'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
      'rounded-[4px]',
      'hover:bg-surface-2',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'transition-all duration-150',
    ],

    /**
     * daySelected: 选中日期
     */
    daySelected: [
      'bg-primary text-primary-foreground',
      'border-primary',
      'shadow-[0_0_6px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'hover:bg-primary hover:text-primary-foreground',
      'focus:bg-primary focus:text-primary-foreground',
    ],

    /**
     * dayToday: 今日
     */
    dayToday: [
      'bg-surface-2 text-foreground',
      'border border-primary',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
    ],

    /**
     * dayOutside: 非当月日期
     */
    dayOutside: [
      'text-muted-foreground opacity-40',
    ],

    /**
     * dayDisabled: 禁用日期
     */
    dayDisabled: [
      'text-muted-foreground opacity-40',
      'pointer-events-none',
    ],

    /**
     * dayHidden: 隐藏日期
     */
    dayHidden: [
      'invisible',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认日历
       */
      default: {
        root: [],
        months: [],
        month: [],
        caption: [],
        captionLabel: [],
        nav: [],
        navButton: [],
        navButtonPrevious: [],
        navButtonNext: [],
        table: [],
        headRow: [],
        headCell: [],
        row: [],
        cell: [],
        day: [],
        daySelected: [],
        dayToday: [],
        dayOutside: [],
        dayDisabled: [],
        dayHidden: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
