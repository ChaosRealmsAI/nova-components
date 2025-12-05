/**
 * Avatar Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Avatar"
 * - Shape: Small radius (4px) or circular
 * - Border: 2px solid neon
 * - Shadow: Subtle neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const avatarConfig = {
  slots: {
    base: [
      'rounded-[4px]',
      'border-2 border-primary',
      'shadow-[0_0_10px_var(--primary)]',
      'overflow-hidden',
    ],
  },
  variants: {
    size: {
      default: { base: 'size-10' },
      sm: { base: 'size-8' },
      lg: { base: 'size-14' },
      xl: { base: 'size-20' },
    },
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [
      'rounded-[4px]',
      'border-2 border-primary',
      'bg-surface-1',
      'text-foreground',
      'font-mono font-bold uppercase tracking-tight',
    ],
  },
  variants: {
    size: {
      default: { base: 'text-sm' },
      sm: { base: 'text-xs' },
      lg: { base: 'text-lg' },
      xl: { base: 'text-xl' },
    },
  },
};
