/**
 * Spinner Base Config - ADR-001 标准 Tailwind 类
 */
export const spinnerBaseConfig = {
  slots: {
    base: 'animate-spin text-primary',
  },
  variants: {
    variant: {
      default: { base: 'text-primary' },
      secondary: { base: 'text-secondary' },
      muted: { base: 'text-muted-foreground' },
    },
    size: {
      default: { base: 'size-6' },
      sm: { base: 'size-4' },
      lg: { base: 'size-8' },
      xl: { base: 'size-12' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
} as const;
