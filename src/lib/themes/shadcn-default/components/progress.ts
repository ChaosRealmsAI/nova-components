export const progressConfig = {
  slots: {
    base: 'bg-secondary rounded-full',
    indicator: 'bg-primary',
  },
  variants: {
    variant: {
      default: {
        base: '',
      },
    },
    size: {
      default: {
        base: 'h-4',
      },
      sm: {
        base: 'h-2',
      },
      lg: {
        base: 'h-6',
      },
      xl: {
        base: 'h-8',
      },
    },
  },
};
