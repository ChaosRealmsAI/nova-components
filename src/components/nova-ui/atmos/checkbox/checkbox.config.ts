/**
 * Checkbox Base Config - ADR-001 标准 Tailwind 类
 */
export const checkboxBaseConfig = {
  slots: {
    base: 'peer shrink-0 rounded-sm border border-border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary transition-colors',
    indicator: 'flex items-center justify-center text-current',
    icon: 'h-3.5 w-3.5',
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
} as const;
