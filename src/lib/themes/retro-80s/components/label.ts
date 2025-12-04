/**
 * Label Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Terminal Label"
 * - Monospace font
 * - Uppercase for emphasis
 * - Tight tracking
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const labelConfig = {
  slots: {
    base: [
      'text-sm font-medium leading-none',
      'font-mono uppercase tracking-tight',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    ],
  },
  variants: {
    variant: {
      default: {
        base: ['text-foreground'],
      },
      muted: {
        base: ['text-muted-foreground'],
      },
      error: {
        base: ['text-destructive'],
      },
    },
    size: {
      default: { base: [] },
      sm: { base: ['text-xs'] },
      lg: { base: ['text-base'] },
    },
  },
} as const;
