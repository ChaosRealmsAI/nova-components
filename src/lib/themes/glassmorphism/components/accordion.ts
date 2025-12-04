/**
 * Accordion 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Accordion Panels"
 */
export const accordionConfig = {
  slots: {
    root: 'w-full',

    item: [
      'border-b border-white/[0.1]',
    ].join(' '),

    header: 'flex',

    trigger: [
      'flex flex-1 items-center justify-between',
      'py-4',
      'font-medium text-foreground',
      'text-[length:var(--text-sm)]',
      'transition-all duration-200',
      'hover:text-primary',
      '[&[data-state=open]>svg]:rotate-180',
    ].join(' '),

    chevron: [
      'h-4 w-4 shrink-0',
      'text-muted-foreground',
      'transition-transform duration-200',
    ].join(' '),

    content: [
      'overflow-hidden',
      'text-[length:var(--text-sm)] text-muted-foreground',
      'transition-all',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',
    ].join(' '),

    contentInner: 'pb-4 pt-0',
  },
  variants: {
    variant: {
      default: {
        root: 'w-full',
        item: 'border-white/[0.1]',
        trigger: 'text-foreground',
        content: 'text-muted-foreground',
      },
      bordered: {
        root: [
          'bg-white/[0.06] backdrop-blur-sm',
          'border border-white/[0.15]',
          'rounded-xl',
        ].join(' '),
        item: [
          'border-b border-white/[0.1]',
          'last:border-b-0',
          'px-4',
        ].join(' '),
        trigger: 'text-foreground',
        content: 'text-muted-foreground',
      },
    },
  },
};
