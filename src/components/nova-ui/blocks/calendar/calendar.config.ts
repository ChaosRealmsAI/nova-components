/**
 * Calendar Base Config
 * Block 级别配置，依赖 Atoms: button
 */
export const calendarBaseConfig = {
  slots: {
    root: 'p-3',
    months: 'flex flex-col sm:flex-row gap-2',
    month: 'flex flex-col gap-4',
    caption: 'flex justify-center pt-1 relative items-center w-full',
    captionLabel: 'text-sm font-medium truncate',
    nav: 'flex items-center gap-1',
    navButton: 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground',
    navButtonPrevious: 'absolute left-1',
    navButtonNext: 'absolute right-1',
    table: 'w-full border-collapse space-x-1',
    headRow: 'flex',
    headCell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
    row: 'flex w-full mt-2',
    cell: 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
    day: 'size-8 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground',
    daySelected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
    dayToday: 'bg-accent text-accent-foreground',
    dayOutside: 'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
    dayDisabled: 'text-muted-foreground opacity-50',
    dayHidden: 'invisible',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
