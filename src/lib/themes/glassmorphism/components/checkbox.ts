/**
 * Checkbox 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Toggle"
 * - Rounded glass container
 * - Glowing checked state
 */
export const checkboxConfig = {
  slots: {
    base: [
      // Size
      'h-5 w-5',
      'shrink-0',

      // Shape - rounded for glass feel
      'rounded-md',

      // Glass border
      'border border-white/20',

      // Default background
      'bg-white/[0.06] backdrop-blur-sm',

      // Focus
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',

      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',

      // Transition
      'transition-all duration-200',

      // Checked state
      'data-[state=checked]:bg-primary/90',
      'data-[state=checked]:border-primary/50',
      'data-[state=checked]:shadow-[0_0_12px_rgba(139,92,246,0.4)]',
    ],

    indicator: [
      'flex items-center justify-center',
      'text-primary-foreground',
    ].join(' '),

    icon: [
      'h-3.5 w-3.5',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
        indicator: [],
        icon: [],
      },
      destructive: {
        base: ['border-destructive/50', 'data-[state=checked]:bg-destructive/90'],
        indicator: [],
        icon: [],
      },
    },
    size: {
      default: {
        base: ['h-5 w-5'],
        icon: ['h-3.5 w-3.5'],
      },
      sm: {
        base: ['h-4 w-4'],
        icon: ['h-3 w-3'],
      },
      lg: {
        base: ['h-6 w-6'],
        icon: ['h-4 w-4'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
