/**
 * Card 组件样式 - Cyberpunk (Upgraded)
 *
 * Design Concept: "Secure Datapad"
 * - Visuals: Grid background, corner markers, technical feel.
 */
export const cardConfig = {
  slots: {
    base: [
      // Background & Text
      'bg-card text-card-foreground',
      // Grid Pattern Background (Subtle)
      'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]',
      'bg-[size:20px_20px]',

      // Border
      'border border-border',
      'relative overflow-hidden',

      // Shape: Top-Right Cut
      '[clip-path:polygon(0_0,calc(100%_-_20px)_0,100%_20px,100%_100%,0_100%)]',

      // Tech Glow
      'shadow-[0_0_0_1px_rgba(0,0,0,0.5)]',
    ],

    header: [
      'flex flex-col space-y-1.5 p-6',
      'border-b border-border/50',
      'bg-surface-2/50',
      'relative',
      // Decorative accent on left
      'after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-primary',
    ],

    title: [
      'font-bold leading-none tracking-wider text-xl uppercase font-mono',
      'text-primary',
      'flex items-center gap-2',
      // "Tech" prefix icon simulation
      'before:content-["//"] before:text-muted-foreground before:text-sm before:mr-1',
    ],

    description: [
      'text-sm text-muted-foreground font-mono mt-2',
      'pl-7',
    ],

    action: [
      'ml-auto flex items-center gap-2',
    ],

    content: [
      'p-6 pt-6',
      'font-sans tracking-wide',
    ],

    footer: [
      'flex items-center p-6 pt-0',
      'border-t border-border/30',
      'bg-surface-1/30',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [],
        header: [],
        title: [],
        description: [],
        action: [],
        content: [],
        footer: [],
      },

      outline: {
        base: [
          'bg-transparent',
          'border-primary/50',
          'shadow-[0_0_15px_rgba(0,229,255,0.1)]',
        ],
      },

      ghost: {
        base: [
          'bg-transparent shadow-none border-none',
          'bg-none',
          '[clip-path:none]',
        ],
      },

      elevated: {
        base: [
          'bg-surface-1',
          'shadow-[0_10px_30px_-10px_rgba(0,229,255,0.2)]',
          'border-primary',
        ],
      },
    },
    size: {
      sm: {
        base: [],
        header: ['p-4'],
        content: ['p-4'],
        footer: ['p-4'],
      },
      default: {
        base: [],
        header: [],
        content: [],
        footer: [],
      },
      lg: {
        base: [],
        header: ['p-8'],
        content: ['p-8'],
        footer: ['p-8'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
