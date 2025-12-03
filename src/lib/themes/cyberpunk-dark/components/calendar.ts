// ADR-008: 纯数据配置，无组件依赖

export const calendarConfig = {
  slots: {
    root: [
      'bg-surface-1 border border-primary',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'shadow-[0_0_15px_var(--primary)]',
    ],
    months: '',
    month: '',
    caption: '',
    captionLabel: 'font-mono uppercase tracking-wider text-primary',
    nav: '',
    navButton: [
      'rounded-none border border-primary/50',
      'hover:bg-primary hover:text-primary-foreground',
      'hover:shadow-[0_0_10px_var(--primary)]',
    ],
    navButtonPrevious: '',
    navButtonNext: '',
    table: '',
    headRow: '',
    headCell: 'font-mono uppercase tracking-wider text-xs text-primary/70',
    row: '',
    cell: '',
    day: [
      'rounded-none font-mono',
      'hover:bg-primary/20 hover:text-primary',
      'hover:shadow-[0_0_8px_var(--primary)]',
    ],
    daySelected: [
      'bg-primary text-primary-foreground',
      'shadow-[0_0_12px_var(--primary)]',
    ],
    dayToday: 'border border-primary text-primary',
    dayOutside: 'text-muted-foreground/50',
    dayDisabled: 'text-muted-foreground/30',
    dayHidden: '',
  },
};
