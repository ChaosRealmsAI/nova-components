/**
 * Progress Base Config - ADR-001 标准 Tailwind 类
 */
export const progressBaseConfig = {
  slots: {
    base: 'relative w-48 overflow-hidden rounded-full bg-surface-2',
    indicator: 'h-full w-full flex-1 bg-primary transition-all',
  },
  variants: {
    variant: {
      default: { base: '', indicator: '' },
    },
    size: {
      default: { base: 'h-2', indicator: '' },
      sm: { base: 'h-1', indicator: '' },
      lg: { base: 'h-3', indicator: '' },
      xl: { base: 'h-4', indicator: '' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
} as const;
