/**
 * Collapsible 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Accordion"
 */

export const collapsibleConfig = {
  slots: {
    base: 'w-full',

    trigger: [
      'flex items-center justify-between w-full',
      'text-foreground',
      'transition-all duration-200',
    ].join(' '),

    content: [
      'overflow-hidden',
      'transition-all duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ].join(' '),
  },

  variants: {
    variant: {
      default: {
        base: 'w-full',
        trigger: 'text-foreground',
        content: 'text-muted-foreground',
      },

      bordered: {
        base: [
          'bg-white/[0.06] backdrop-blur-sm',
          'border border-white/[0.15]',
          'rounded-xl',
        ].join(' '),
        trigger: [
          'px-4 py-3',
          'rounded-xl',
          'hover:bg-white/[0.05]',
        ].join(' '),
        content: 'px-4 pb-4',
      },

      ghost: {
        trigger: [
          'hover:bg-white/[0.08]',
          'rounded-lg',
          'px-3 py-2',
        ].join(' '),
      },
    },
  },
};
