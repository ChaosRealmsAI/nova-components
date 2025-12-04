export const checkboxConfig = {
  slots: {
    base: [
      'peer shrink-0 h-5 w-5',
      'rounded-sm',
      'border-2 border-black',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'active:shadow-none active:translate-x-[2px] active:translate-y-[2px]',
    ],
    indicator: 'flex items-center justify-center text-current',
    icon: 'h-3.5 w-3.5',
  },
};