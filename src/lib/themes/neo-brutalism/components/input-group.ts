/**
 * InputGroup Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Input Group Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputGroupConfig = {
  slots: {
    root: [
      'flex w-full items-center',
    ],
    input: [
      'flex-1',
    ],
    button: [
      '',
    ],
    addon: [
      'inline-flex items-center justify-center px-3',
      'text-sm font-bold uppercase tracking-wide',
      'text-muted-foreground',
      'bg-white border-2 border-black',
      'rounded-none',
    ],
  },
  variants: {
    variant: {
      default: {
        root: ['gap-2'],
        input: ['rounded-none'],
        button: ['rounded-none'],
        addon: ['rounded-none'],
      },
      attached: {
        root: ['gap-0'],
        input: [
          'rounded-none first:rounded-none last:rounded-none',
          'focus:z-10',
          'border-r-0 last:border-r-2',
        ],
        button: [
          'rounded-none first:rounded-none last:rounded-none',
          'border-r-0 last:border-r-2',
        ],
        addon: [
          'rounded-none first:rounded-none last:rounded-none',
          'border-l-0 first:border-l-2',
          'border-r-0 last:border-r-2',
        ],
      },
    },
    size: {
      default: {
        addon: ['h-10'],
      },
      sm: {
        addon: ['h-8 text-xs'],
      },
      lg: {
        addon: ['h-12 text-base'],
      },
    },
  },
};