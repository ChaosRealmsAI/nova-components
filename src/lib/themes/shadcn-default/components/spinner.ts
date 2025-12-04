export const spinnerConfig = {
  slots: {
    base: 'animate-spin',
  },
  variants: {
    variant: {
      default: {
        base: 'text-primary',
      },
      secondary: {
        base: 'text-secondary',
      },
      muted: {
        base: 'text-muted-foreground',
      },
    },
    size: {
      default: {
        base: 'size-6',
      },
      sm: {
        base: 'size-4',
      },
      lg: {
        base: 'size-8',
      },
      xl: {
        base: 'size-12',
      },
    },
  },
};
