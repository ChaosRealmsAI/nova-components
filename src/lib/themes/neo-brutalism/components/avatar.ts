/**
 * Avatar Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Avatar Block"
 * - Shape: Sharp corners (0px) - square avatar for brutalism.
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (2px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const avatarConfig = {
  slots: {
    base: [
      'rounded-none',
      'border-2 border-black',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
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
} as const;

export const avatarFallbackConfig = {
  slots: {
    base: [
      'rounded-none',
      'border-2 border-black',
      'bg-white',
      'text-foreground',
      'font-bold uppercase tracking-wide',
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
} as const;