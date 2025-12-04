export const checkboxConfig = {
  slots: {
    base: 'rounded-sm border border-border shadow-sm focus-visible:ring-1 focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary transition-colors',
    indicator: 'text-current',
    icon: '',
  },
  variants: {
    variant: {
      default: { base: '' },
      destructive: {
        base: 'data-[state=checked]:bg-destructive data-[state=checked]:border-destructive data-[state=checked]:text-destructive-foreground',
      },
    },
    size: {
      default: { base: 'h-4 w-4', icon: 'h-3.5 w-3.5' },
      sm: { base: 'h-3.5 w-3.5', icon: 'h-3 w-3' },
      lg: { base: 'h-5 w-5', icon: 'h-4 w-4' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
