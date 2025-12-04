/**
 * Kbd Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Keyboard Key"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Background: Dark surface
 * - Shadow: Subtle neon glow
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const kbdConfig = {
  slots: {
    base: [
      'inline-flex items-center gap-1',
      'rounded-[2px] border-2 border-primary',
      'bg-surface-1 px-1.5',
      'font-mono font-bold uppercase tracking-tight',
      'text-foreground',
      'shadow-[0_0_10px_var(--primary)]',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
      },
      outline: {
        base: [
          'bg-transparent',
        ],
      },
    },
    size: {
      default: {
        base: [
          'h-5 min-w-5',
          'text-xs',
        ],
      },
      sm: {
        base: [
          'h-4 min-w-4',
          'text-[10px] px-1',
        ],
      },
      lg: {
        base: [
          'h-6 min-w-6',
          'text-sm px-2',
        ],
      },
    },
  },
};
