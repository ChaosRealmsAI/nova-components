/**
 * Select 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Dropdown"
 * - Frosted glass trigger and content
 * - Subtle glow effects
 */
export const selectConfig = {
  slots: {
    trigger: [
      // Layout
      'flex h-10 w-full items-center justify-between gap-2',
      'px-4 py-2',

      // Glass background
      'bg-white/[0.06] backdrop-blur-sm',

      // Glass border
      'border border-white/[0.15]',

      // Shape
      'rounded-xl',

      // Typography
      'text-sm text-foreground',

      // Shadow
      'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',

      // Transition
      'transition-all duration-200',

      // Focus
      'focus:outline-none',
      'focus:border-primary/50',
      'focus:ring-2 focus:ring-primary/20',
      'focus:shadow-[0_0_16px_rgba(139,92,246,0.15)]',

      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',

      // Placeholder
      '[&>span]:line-clamp-1',
      'data-[placeholder]:text-muted-foreground',
    ],

    content: [
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',

      // Glass background
      'bg-white/[0.12] backdrop-blur-2xl',

      // Glass border
      'border border-white/[0.15]',

      // Shape
      'rounded-xl',

      // Shadow
      'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',

      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    viewport: 'p-1.5',

    item: [
      'relative flex w-full cursor-default select-none items-center gap-2',
      'rounded-lg',
      'py-2 pl-3 pr-8',
      'text-sm text-foreground',
      'outline-none',
      'transition-colors duration-150',

      // Focus/hover
      'focus:bg-white/[0.1]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    label: 'px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider',

    separator: '-mx-1 my-1 h-px bg-white/[0.1]',

    indicator: 'absolute right-3 flex h-3.5 w-3.5 items-center justify-center text-primary',

    scrollButton: [
      'flex cursor-default items-center justify-center py-1',
      'text-muted-foreground',
    ].join(' '),

    icon: 'h-4 w-4 opacity-60',
  },

  variants: {
    variant: {
      default: {},
    },

    size: {
      default: {},
      sm: {
        trigger: 'h-9 text-xs rounded-lg px-3',
      },
    },
  },
};
