/**
 * Checkbox Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Check Box"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Shadow: Subtle neon glow
 * - Checked: Strong neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const checkboxConfig = {
  slots: {
    base: [
      'peer h-4 w-4 shrink-0',
      'rounded-[2px] border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=checked]:border-primary',
      'data-[state=checked]:shadow-[0_0_20px_var(--primary)]',
      'transition-all duration-150',
      'active:scale-95',
    ],

    indicator: [
      'flex items-center justify-center text-current',
    ],
  },
};
