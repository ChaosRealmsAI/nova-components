/**
 * Badge Base Config - ADR-001 标准 Tailwind 类
 */
export const badgeBaseConfig = {
  slots: {
    base: 'inline-flex items-center rounded-md border px-2.5 py-0.5 text-[length:var(--text-xs)] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  },
  variants: {
    variant: {
      default: {
        base: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
      },
      secondary: {
        base: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      destructive: {
        base: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
      },
      outline: {
        base: 'text-foreground border-border',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
