/**
 * Input Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Data Entry Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (4px).
 * - Focus: High contrast.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputConfig = {
  slots: {
    base: [
      // Layout
      'flex w-full',
      // Shape & Border
      'rounded-none border-2 border-black',
      // Color
      'bg-white px-3 py-1',
      'text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'transition-all',
      // File input
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
      // Placeholder
      'placeholder:text-muted-foreground',
      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:bg-gray-100',
    ],
  },
  variants: {
    variant: {
      default: { base: [] },
      filled: { base: ['bg-gray-100', 'border-black'] },
      ghost: { 
        base: [
          'border-transparent',
          'shadow-none',
          'bg-transparent',
          'focus-visible:border-black',
          'focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
          'focus-visible:bg-white',
        ],
      },
    },
    inputSize: {
      default: { base: ['h-10'] },
      sm: { base: ['h-8', 'text-xs', 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'] },
      lg: { base: ['h-12', 'text-base', 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'] },
    },
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
  },
} as const;
