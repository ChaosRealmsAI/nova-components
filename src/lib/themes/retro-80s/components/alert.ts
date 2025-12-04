/**
 * Alert Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Notification"
 * - Shape: Small radius (4px)
 * - Border: 2px solid neon
 * - Background: Dark surface
 * - Shadow: Neon glow
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const alertConfig = {
  slots: {
    base: [
      'relative w-full rounded-[4px]',
      'border-2',
      'bg-surface-1',
      'px-4 py-3',
      'shadow-[0_0_20px_var(--primary)]',
      'transition-all duration-150',
    ],
    icon: [
      'h-4 w-4',
      'text-foreground',
    ],
    title: [
      'mb-1 font-semibold leading-none tracking-tight',
      'font-mono uppercase',
      'text-foreground',
    ],
    description: [
      'text-sm',
      'font-mono',
      'text-muted-foreground',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'border-primary',
          'text-foreground',
        ],
      },
      destructive: {
        base: [
          'border-destructive',
          'shadow-[0_0_20px_var(--destructive)]',
          'text-foreground',
        ],
      },
    },
  },
};
