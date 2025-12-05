/**
 * Input Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Terminal Input Field"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon (primary color)
 * - Background: Dark surface (surface-1)
 * - Focus: Strong neon glow effect
 * - Typography: Monospace font
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputConfig = {
  slots: {
    base: [
      // Layout
      'flex w-full',
      
      // Shape & Border
      'rounded-[2px] border-2 border-border',
      
      // Color - Dark background
      'bg-surface-1 px-3 py-1',
      
      // Typography - Monospace
      'text-sm font-mono text-foreground',
      
      // Transition
      'transition-all duration-150',
      
      // File input
      'file:border-0 file:bg-transparent file:text-sm file:font-mono file:text-foreground',
      
      // Placeholder
      'placeholder:text-muted-foreground',
      
      // Focus - Strong neon glow
      'focus-visible:outline-none',
      'focus-visible:border-primary',
      'focus-visible:shadow-[0_0_20px_var(--primary)]',
      'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none',
    ],
  },
  variants: {
    variant: {
      default: { base: [] },
      filled: { 
        base: [
          'bg-surface-2',
          'border-border-vivid',
        ],
      },
    },
    inputSize: {
      default: { base: ['h-10'] },
      sm: { base: ['h-8', 'text-xs'] },
      lg: { base: ['h-12', 'text-base'] },
    },
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
  },
};
