/**
 * Tabs 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Tab Bar"
 * - Frosted glass tab list
 * - Active tab with glass highlight
 */
export const tabsConfig = {
  slots: {
    root: 'flex flex-col gap-3',

    list: [
      'inline-flex h-11 w-fit items-center justify-center p-1',

      // Glass background
      'bg-white/[0.06] backdrop-blur-md',

      // Glass border
      'border border-white/[0.1]',

      // Shape
      'rounded-xl',

      // Text
      'text-muted-foreground',
    ].join(' '),

    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap',
      'rounded-lg',
      'px-4 py-2',
      'text-sm font-medium',

      // Transition
      'transition-all duration-200',

      // Default state
      'ring-offset-background',

      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',

      // Hover
      'hover:text-foreground/80',

      // Active state - glass highlight
      'data-[state=active]:bg-white/[0.15]',
      'data-[state=active]:text-foreground',
      'data-[state=active]:shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
      'data-[state=active]:backdrop-blur-sm',
    ].join(' '),

    content: [
      'mt-3',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',
    ].join(' '),
  },
  variants: {
    variant: {
      default: {
        root: 'flex flex-col gap-3',
        list: 'bg-white/[0.06] backdrop-blur-md',
        trigger: 'text-muted-foreground data-[state=active]:text-foreground',
        content: 'mt-3',
      },
      underline: {
        root: 'flex flex-col gap-0',
        list: [
          'w-full justify-start rounded-none',
          'bg-transparent backdrop-blur-none',
          'border-0 border-b border-white/[0.1]',
          'p-0 h-auto',
        ].join(' '),
        trigger: [
          'rounded-none',
          'border-b-2 border-transparent',
          'px-4 py-3',
          'bg-transparent shadow-none backdrop-blur-none',
          'transition-colors',
          'data-[state=active]:bg-transparent',
          'data-[state=active]:shadow-none',
          'data-[state=active]:border-primary',
          'data-[state=active]:text-primary',
        ].join(' '),
        content: 'mt-4',
      },
    },
  },
};
