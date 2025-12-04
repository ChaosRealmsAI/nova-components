export const toggleConfig = {
  slots: {
    base: [
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
      'border-2 border-transparent hover:border-black data-[state=on]:border-black',
      'data-[state=on]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    ],
  },
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border-2 border-black bg-transparent hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-10 px-3',
      sm: 'h-9 px-2.5',
      lg: 'h-11 px-5',
    },
  },
};