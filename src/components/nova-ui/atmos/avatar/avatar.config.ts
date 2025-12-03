/**
 * Avatar Base Config - ADR-001 标准 Tailwind 类
 */
export const avatarBaseConfig = {
  slots: {
    base: 'relative flex shrink-0 overflow-hidden rounded-full',
  },
  variants: {
    size: {
      default: { base: 'size-10' },
      sm: { base: 'size-8' },
      lg: { base: 'size-14' },
      xl: { base: 'size-20' },
    },
  },
  defaultVariants: {
    size: 'default',
  },
} as const;

export const avatarImageBaseConfig = {
  slots: {
    base: 'aspect-square size-full',
  },
} as const;

export const avatarFallbackBaseConfig = {
  slots: {
    base: 'flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground',
  },
  variants: {
    size: {
      default: { base: 'text-[length:var(--text-sm)]' },
      sm: { base: 'text-[length:var(--text-xs)]' },
      lg: { base: 'text-[length:var(--text-lg)]' },
      xl: { base: 'text-[length:var(--text-xl)]' },
    },
  },
  defaultVariants: {
    size: 'default',
  },
} as const;
