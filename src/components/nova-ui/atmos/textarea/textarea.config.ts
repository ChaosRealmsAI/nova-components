/**
 * Textarea Base Config - ADR-001 标准 Tailwind 类
 */
export const textareaBaseConfig = {
  slots: {
    // 注意：min-h 在 variants 中定义，不在 base 中，确保 size 变体生效
    base: 'flex w-full rounded-md border border-border bg-transparent px-3 py-2 text-[length:var(--text-sm)] text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y',
  },
  variants: {
    variant: {
      default: { base: '' },
      filled: { base: 'bg-surface-1 border-transparent' },
    },
    textareaSize: {
      default: { base: 'min-h-20' },
      sm: { base: 'min-h-14 text-[length:var(--text-xs)]' },
      lg: { base: 'min-h-32' },
    },
  },
  defaultVariants: {
    variant: 'default',
    textareaSize: 'default',
  },
} as const;
