/**
 * Textarea Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Text Block"
 * - Shape: Sharp corners.
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const textareaConfig = {
  slots: {
    base: [
      'flex min-h-[80px] w-full',
      'rounded-none border-2 border-black',
      'bg-white px-3 py-2',
      'text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'transition-all',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0',
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:bg-gray-100',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
      },
      filled: {
        base: ['bg-gray-100', 'border-black'],
      },
    },
    textareaSize: {
      default: {
        base: [],
      },
      sm: {
        base: ['min-h-[60px]', 'text-xs', 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'],
      },
      lg: {
        base: ['min-h-[120px]', 'text-base', 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'],
      },
    },
  },
};
