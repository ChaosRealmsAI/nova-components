/**
 * Card Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Container"
 * - Shape: Small radius (4px)
 * - Border: 2px solid neon (primary color)
 * - Background: Dark surface (surface-1)
 * - Shadow: Neon glowing shadow
 * - Typography: Monospace for description
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const cardConfig = {
  slots: {
    base: [
      // Background & Text
      'bg-surface-1 text-card-foreground',
      
      // Shape
      'rounded-[4px]',
      
      // Border - Neon colored
      'border-2 border-primary',
      
      // Shadow - Neon glow
      'shadow-[0_0_20px_var(--primary)]',
      
      // Layout
      'gap-6 py-6',
      
      // Transition
      'transition-all duration-150',
      
      // Hover - Glow intensifies
      'hover:shadow-[0_0_30px_var(--primary)]',
    ],
    header: ['px-6 gap-2 flex flex-col space-y-1.5'],
    title: [
      'font-bold text-xl leading-none tracking-tight',
      'font-mono uppercase', // Retro 80s typography
      'text-foreground',
    ],
    description: [
      'text-sm text-muted-foreground',
      'font-mono', // Monospace for retro feel
    ],
    action: [],
    content: ['px-6 pt-0'],
    footer: ['px-6 pt-0 flex items-center'],
  },

  variants: {
    variant: {
      default: {
        base: [], // Uses base styles
      },

      outline: {
        base: [
          'bg-transparent',
          'shadow-none',
          'border-border',
        ],
      },

      ghost: {
        base: [
          'bg-transparent',
          'border-transparent',
          'shadow-none',
        ],
      },

      elevated: {
        base: [
          'shadow-[0_0_40px_var(--primary)]', // Stronger glow
        ],
      },
    },

    size: {
      sm: {
        base: ['py-4 gap-4'],
        header: ['px-4'],
        content: ['px-4'],
        footer: ['px-4'],
      },
      default: {},
      lg: {
        base: ['py-8 gap-8'],
        header: ['px-8'],
        content: ['px-8'],
        footer: ['px-8'],
      },
    },
  },
};
