/**
 * Button Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Electronic Pulse"
 * - Shape: Small radius (4px) for modern-retro feel
 * - Borders: 2px solid neon colors with glow
 * - Shadow: Neon glowing shadow (0 0 20px var(--primary))
 * - Typography: Monospace, uppercase, tight tracking
 * - Interaction: Glow intensifies on hover, quick flash on active
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const buttonConfig = {
  slots: {
    base: [
      // Layout
      'inline-flex items-center justify-center',
      'whitespace-nowrap',
      
      // Typography - Retro 80s style
      'text-sm font-mono font-bold uppercase tracking-tight',
      
      // Border - Neon colored
      'border-2',
      
      // Shape - Small radius
      'rounded-[4px]',
      
      // Shadow - Neon glow effect
      'shadow-[0_0_20px_var(--primary)]',
      
      // Transition - Fast and crisp
      'transition-all duration-150',
      
      // Focus - Cyan glow ring
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
      
      // Hover - Glow intensifies
      'hover:shadow-[0_0_30px_var(--primary)]',
      
      // Active - Quick flash effect
      'active:scale-[0.98] active:shadow-[0_0_10px_var(--primary)]',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground border-primary',
          'hover:bg-primary-vivid hover:shadow-[0_0_30px_var(--primary)]',
        ],
      },

      destructive: {
        base: [
          'bg-destructive text-destructive-foreground border-destructive',
          'shadow-[0_0_20px_var(--destructive)]',
          'hover:bg-destructive/90 hover:shadow-[0_0_30px_var(--destructive)]',
        ],
      },

      outline: {
        base: [
          'bg-transparent text-primary border-primary',
          'hover:bg-primary hover:text-primary-foreground',
        ],
      },

      secondary: {
        base: [
          'bg-secondary text-secondary-foreground border-secondary',
          'shadow-[0_0_20px_var(--secondary)]',
          'hover:bg-secondary-vivid hover:shadow-[0_0_30px_var(--secondary)]',
        ],
      },

      ghost: {
        base: [
          'border-transparent shadow-none',
          'text-foreground',
          'hover:bg-surface-1 hover:border-primary hover:shadow-[0_0_20px_var(--primary)]',
        ],
      },

      link: {
        base: [
          'text-primary underline-offset-4 hover:underline',
          'border-none shadow-none',
          'bg-transparent',
          'active:scale-100',
          'p-0 h-auto',
        ],
      },
    },

    size: {
      default: { base: ['h-10 px-4 py-2'] },
      sm: { base: ['h-9 px-3 text-xs'] },
      lg: { base: ['h-12 px-8 text-base'] },
      icon: { base: ['h-10 w-10'] },
    },
  },
};
