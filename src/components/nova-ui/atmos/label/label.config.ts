/**
 * Label Base Config - ADR-001 标准 Tailwind 类
 */
export const labelBaseConfig = {
  slots: {
    base: 'flex items-center gap-2 text-[length:var(--text-sm)] leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  },
  variants: {
    variant: {
      default: { base: 'text-foreground' },
      muted: { base: 'text-muted-foreground' },
      error: { base: 'text-destructive' },
    },
    size: {
      default: { base: '' },
      sm: { base: 'text-[length:var(--text-xs)]' },
      lg: { base: 'text-[length:var(--text-base)]' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
} as const;
