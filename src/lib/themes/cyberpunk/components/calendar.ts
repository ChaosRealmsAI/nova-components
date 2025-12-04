/**
 * Calendar 组件样式 - Cyberpunk (Date Grid)
 */
export const calendarConfig = {
  slots: {
    root: [
      'p-3 bg-black border border-primary/30',
      'shadow-[0_0_20px_rgba(0,229,255,0.1)]',
    ],
    
    months: [
      'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
    ],
    
    month: [
      'space-y-4',
    ],
    
    caption: [
      'flex justify-center pt-1 relative items-center',
    ],
    
    captionLabel: [ // Fixed camelCase
      'text-sm font-medium font-mono text-primary uppercase tracking-widest',
    ],
    
    nav: [
      'space-x-1 flex items-center',
    ],
    
    navButton: [ // Fixed camelCase
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:text-primary',
    ],

    navButtonPrevious: [ // Added missing slot
        'absolute left-1',
    ],

    navButtonNext: [ // Added missing slot
        'absolute right-1',
    ],
    
    table: [
      'w-full border-collapse space-y-1',
    ],
    
    headRow: [ // Fixed camelCase
      'flex',
    ],
    
    headCell: [ // Fixed camelCase
      'text-muted-foreground rounded-none w-9 font-normal text-[0.8rem]',
      'font-mono uppercase text-primary/70',
    ],
    
    row: [
      'flex w-full mt-2',
    ],
    
    cell: [
      'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
      'rounded-none', // Reset rounded
      '[&:has([aria-selected])]:bg-primary/20', // Selection bg
    ],
    
    day: [
      'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
      'rounded-none font-mono hover:bg-primary/20 hover:text-primary',
    ],
    
    daySelected: [ // Fixed camelCase
      'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
      'shadow-[0_0_10px_rgba(0,229,255,0.6)]',
    ],
    
    dayToday: [ // Fixed camelCase
      'bg-accent text-accent-foreground',
      'text-accent border border-accent', // Outline today
    ],
    
    dayOutside: [ // Fixed camelCase
      'text-muted-foreground opacity-50',
    ],
    
    dayDisabled: [ // Fixed camelCase
      'text-muted-foreground opacity-50',
    ],
    
    dayHidden: [ // Fixed camelCase
      'invisible',
    ],
  },
};
