export const switchConfig = {
  slots: {
    base: 'rounded-full border border-transparent shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
    thumb: 'rounded-full ring-0 bg-background data-[state=unchecked]:translate-x-0',
  },
  variants: {
    variant: {
      default: { base: '' },
    },
    size: {
      default: {
        base: 'h-[1.15rem] w-8',
        thumb: 'size-4 data-[state=checked]:translate-x-[calc(100%-2px)]',
      },
      sm: {
        base: 'h-4 w-7',
        thumb: 'size-3 data-[state=checked]:translate-x-[calc(100%-2px)]',
      },
      lg: {
        base: 'h-6 w-11',
        thumb: 'size-5 data-[state=checked]:translate-x-[calc(100%-2px)]',
      },
    },
  },
};
