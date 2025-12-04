export const avatarConfig = {
  slots: {
    base: 'rounded-full',
  },
  variants: {
    size: {
      default: { base: 'size-10' },
      sm: { base: 'size-8' },
      lg: { base: 'size-14' },
      xl: { base: 'size-20' },
    },
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: 'rounded-full bg-muted text-muted-foreground',
  },
  variants: {
    size: {
      default: { base: 'text-sm' },
      sm: { base: 'text-xs' },
      lg: { base: 'text-lg' },
      xl: { base: 'text-xl' },
    },
  },
};
