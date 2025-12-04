/**
 * Calendar 组件样式 (Shadcn Default Theme)
 */

export const calendarConfig = {
  slots: {
    root: [
      'rounded-md',
      'border',
      'bg-background',
      'text-foreground',
    ],
    months: '',
    month: '',
    caption: '',
    captionLabel: [
      'text-foreground',
    ],
    nav: '',
    navButton: [
      'rounded-md',
      'text-sm',
      'font-medium',
      'transition-colors',
      'focus-visible:outline-none',
      'focus-visible:ring-1',
      'focus-visible:ring-ring',
      'border',
      'border-input',
      'shadow-sm',
      'hover:bg-accent',
      'hover:text-accent-foreground',
    ],
    navButtonPrevious: '',
    navButtonNext: '',
    table: '',
    headRow: '',
    headCell: [
      'text-muted-foreground',
    ],
    row: '',
    cell: [
      '[&:has([aria-selected])]:bg-accent',
      '[&:has([aria-selected].day-outside)]:bg-accent/50',
      '[&:has([aria-selected].day-range-end)]:rounded-r-md',
    ],
    day: [
      'rounded-md',
      'text-sm',
      'hover:bg-accent',
      'hover:text-accent-foreground',
      'focus-visible:outline-none',
      'focus-visible:ring-1',
      'focus-visible:ring-ring',
    ],
    daySelected: [
      'bg-primary',
      'text-primary-foreground',
      'hover:bg-primary',
      'hover:text-primary-foreground',
      'focus:bg-primary',
      'focus:text-primary-foreground',
    ],
    dayToday: [
      'bg-accent',
      'text-accent-foreground',
    ],
    dayOutside: [
      'text-muted-foreground',
      'aria-selected:bg-accent/50',
      'aria-selected:text-muted-foreground',
    ],
    dayDisabled: [
      'text-muted-foreground',
    ],
    dayHidden: '',
  },
};
