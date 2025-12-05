/**
 * Textarea Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Terminal Text Area"
 * - Same as Input but multi-line
 * - Monospace font
 * - Neon border and glow on focus
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const textareaConfig = {
  slots: {
    base: [
      'flex min-h-[80px] w-full',
      'rounded-[2px] border-2 border-border',
      'bg-surface-1 px-3 py-2',
      'text-sm font-mono text-foreground',
      'transition-all duration-150',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none',
      'focus-visible:border-primary',
      'focus-visible:shadow-[0_0_20px_var(--primary)]',
      'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
  },
  variants: {
    variant: {
      default: { base: [] },
      filled: { 
        base: [
          'bg-surface-2',
          'border-border-vivid',
        ],
      },
    },
    textareaSize: {
      default: { base: [] },
      sm: { base: ['min-h-[60px]', 'text-xs'] },
      lg: { base: ['min-h-[120px]', 'text-base'] },
    },
  },
};
