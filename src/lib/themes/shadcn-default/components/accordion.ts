/**
 * Accordion 组件样式
 */
export const accordionConfig = {
  slots: {
    root: 'w-full',
    item: 'border-b',
    header: 'flex',
    trigger:
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-[length:var(--text-sm)]',
    chevron: 'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
    content:
      'overflow-hidden text-[length:var(--text-sm)] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    contentInner: 'pb-4 pt-0',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: 'border-border',
        trigger: 'text-foreground',
        content: 'text-foreground',
      },
      bordered: {
        root: 'border border-border rounded-lg',
        item: 'border-b border-border last:border-b-0 px-4',
        trigger: 'text-foreground',
        content: 'text-foreground',
      },
    },
  },
};
