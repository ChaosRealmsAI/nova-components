/**
 * Button Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Raw & Assertive"
 * - Shape: Strict 0px radius.
 * - Borders: 2px solid black everywhere.
 * - Shadow: Hard black offset shadow (4px 4px).
 * - Interaction: "Press down" effect (shadow disappears, element moves).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const buttonConfig = {
  slots: {
    base: [
      // Layout
      'inline-flex items-center justify-center',
      'whitespace-nowrap',
      
      // Typography
      'text-sm font-bold uppercase tracking-wide',
      
      // Border (Always present in brutalism often, or at least thick)
      'border-2 border-black',
      
      // Shape
      'rounded-none',
      
      // Shadow (The "Brutalist" signature)
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      
      // Transition
      'transition-all duration-75',
      
      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
      
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:translate-x-[2px] disabled:translate-y-[2px]',
      
      // Active State (The "Press" effect)
      'active:translate-x-[2px] active:translate-y-[2px]',
      'active:shadow-none',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'hover:bg-primary-vivid',
        ],
      },

      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
          'hover:bg-destructive/90',
        ],
      },

      outline: {
        base: [
          'bg-white text-black',
          'hover:bg-accent hover:text-accent-foreground',
        ],
      },

      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
          'hover:bg-secondary-vivid',
        ],
      },

      ghost: {
        base: [
          // Ghost often breaks the rule of "always border" to fit toolbar contexts,
          // OR it keeps the border but no shadow.
          // Let's go with: Transparent bg, no shadow initially, hover adds structure.
          'border-transparent shadow-none', // Override base
          'text-foreground',
          'hover:bg-accent hover:text-accent-foreground hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
          'active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
        ],
      },

      link: {
        base: [
          'text-primary underline-offset-4 hover:underline',
          'border-none shadow-none', // Remove box look
          'bg-transparent',
          'active:translate-x-0 active:translate-y-0', // No press effect
          'p-0 h-auto', // Reset sizing
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