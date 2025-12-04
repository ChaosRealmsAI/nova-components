/**
 * RadioGroup Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Radio Button"
 * - Shape: Small radius (circular)
 * - Border: 2px solid neon
 * - Shadow: Neon glow when checked
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const radioGroupConfig = {
  slots: {
    base: [
      'grid gap-2',
    ],
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [
      'aspect-square h-4 w-4',
      'rounded-full',
      'border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
      'ring-offset-background',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary data-[state=checked]:border-primary',
      'data-[state=checked]:shadow-[0_0_20px_var(--primary)]',
      'transition-all duration-150',
      'active:scale-95',
    ],

    indicator: [
      'flex items-center justify-center',
      'text-primary-foreground',
    ],

    icon: [
      'h-2.5 w-2.5 fill-current',
    ],
  },
};
