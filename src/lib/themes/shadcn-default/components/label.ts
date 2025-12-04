export const labelConfig = {
  slots: {
    base: 'font-medium gap-2 text-sm',
  },
  variants: {
    variant: {
      default: {
        base: 'text-foreground',
      },
      muted: {
        base: 'text-muted-foreground',
      },
      error: {
        base: 'text-destructive',
      },
    },
    size: {
      default: {
        base: '',
      },
      sm: {
        base: 'text-xs',
      },
      lg: {
        base: 'text-base',
      },
    },
  },
};
