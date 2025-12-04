export const buttonConfig = {
  slots: {
    base: [
      'inline-flex items-center justify-center whitespace-nowrap',
      'rounded-md',
      'text-sm font-bold',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'border-2 border-black',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    ],
  },
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'border-transparent shadow-none hover:bg-accent hover:text-accent-foreground active:translate-x-0 active:translate-y-0',
      link: 'text-primary underline-offset-4 hover:underline border-none shadow-none bg-transparent active:translate-x-0 active:translate-y-0',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
  },
};