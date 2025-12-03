// ADR-008: 纯数据配置，无组件依赖

export const calendarConfig = {
  slots: {
    root: [
      'bg-card rounded-xl border border-border/50',
      'shadow-lg shadow-primary/5',
    ],
    months: '',
    month: '',
    caption: '',
    captionLabel: 'font-medium text-foreground',
    nav: '',
    navButton: [
      'rounded-lg',
      'hover:bg-primary/10 hover:text-primary',
      'transition-colors duration-200',
    ],
    navButtonPrevious: '',
    navButtonNext: '',
    table: '',
    headRow: '',
    headCell: 'text-muted-foreground font-medium',
    row: '',
    cell: '',
    day: [
      'rounded-lg',
      'hover:bg-primary/10 hover:text-primary',
      'transition-colors duration-200',
    ],
    daySelected: [
      'bg-primary text-primary-foreground',
      'hover:bg-primary/90',
    ],
    dayToday: 'bg-accent text-accent-foreground font-semibold',
    dayOutside: 'text-muted-foreground/50',
    dayDisabled: 'text-muted-foreground/30',
    dayHidden: '',
  },
};
