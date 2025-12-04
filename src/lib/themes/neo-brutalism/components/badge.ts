export const badgeConfig = {
  slots: {
    base: [
      'inline-flex items-center',
      'rounded-md', // More square for brutalism
      'border-2 border-black',
      'px-2.5 py-0.5',
      'text-xs font-bold',
      'transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    ],
  },
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/80',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
      outline: 'text-foreground',
    },
  },
};