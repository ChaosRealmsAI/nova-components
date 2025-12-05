/**
 * Calendar Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Calendar"
 * - Shape: 24px large radius card
 * - Shadow: Neumorphic raised effect
 * - Selected: Raised neumorphic effect on selected date
 * - Navigation: Neumorphic raised buttons
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const calendarConfig = {
  slots: {
    /**
     * root: 日历根容器
     */
    root: [
      'p-4',
      'bg-surface-1',
      'rounded-[24px]',
      'border-0',
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
    ],

    /**
     * months: 月份容器
     */
    months: [
      'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
    ],

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
      'inline-flex items-center justify-center',
      'h-8 w-8',
      'rounded-[12px]',
      'border-0',
      'bg-surface-1 text-foreground',
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      'active:translate-y-0',
      'disabled:opacity-50',
      'transition-all duration-200 ease-in-out',
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
      'text-muted-foreground',
      'rounded-[8px]',
      'w-9 font-normal text-[0.8rem]',
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
      'relative p-0 text-center text-sm',
      'focus-within:relative focus-within:z-20',
      '[&:has([aria-selected])]:bg-transparent',
    ],

    /**
     * day: 日期按钮
     */
    day: [
      'h-9 w-9',
      'inline-flex items-center justify-center',
      'p-0',
      'rounded-[12px]',
      'text-sm font-normal',
      'text-foreground',
      'bg-surface-1',
      'hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'focus:outline-none',
      'transition-all duration-200 ease-in-out',
    ],

    /**
     * daySelected: 选中日期
     */
    daySelected: [
      'bg-primary text-primary-foreground',
      'shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      'hover:shadow-[5px_5px_10px_var(--shadow-dark),-5px_-5px_10px_var(--shadow-light)]',
      'hover:-translate-y-1',
    ],

    /**
     * dayToday: 今日
     */
    dayToday: [
      'bg-surface-2',
      'text-primary',
      'font-semibold',
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * dayOutside: 非当月日期
     */
    dayOutside: [
      'text-muted-foreground/40',
      'opacity-50',
    ],

    /**
     * dayDisabled: 禁用日期
     */
    dayDisabled: [
      'text-muted-foreground',
      'opacity-40',
      'cursor-not-allowed',
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
