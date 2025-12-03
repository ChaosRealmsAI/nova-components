// ADR-008: 纯数据配置，无组件依赖

export const calendarConfig = {
  slots: {
    root: [
      'bg-card rounded-2xl border border-border',
      'shadow-xl shadow-primary/10',
    ],
    months: '',
    month: '',
    caption: '',
    captionLabel: 'font-semibold text-foreground',
    nav: '',
    navButton: [
      'rounded-xl',
      'hover:bg-primary/15 hover:text-primary',
      'transition-all duration-300',
    ],
    navButtonPrevious: '',
    navButtonNext: '',
    table: '',
    headRow: '',
    headCell: 'text-muted-foreground font-medium',
    row: '',
    cell: '',
    day: [
      'rounded-xl',
      'hover:bg-primary/15 hover:text-primary',
      'transition-all duration-300',
    ],
    daySelected: [
      'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground',
      'shadow-md shadow-primary/30',
    ],
    dayToday: 'bg-accent text-accent-foreground ring-2 ring-primary/30',
    dayOutside: 'text-muted-foreground/40',
    dayDisabled: 'text-muted-foreground/25',
    dayHidden: '',
  },
};
