/**
 * Accordion Base Config
 *
 * Block 级别配置，定义手风琴组件的布局和样式
 * 基于 @radix-ui/react-accordion
 */
export const accordionBaseConfig = {
  slots: {
    root: 'w-full',
    item: 'border-b border-border',
    header: 'flex',
    trigger:
      'flex flex-1 items-center justify-between py-4 text-sm font-medium text-foreground transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
    chevron: 'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
    content:
      'overflow-hidden text-sm text-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    contentInner: 'pb-4 pt-0',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: '',
        trigger: '',
        content: '',
      },
      bordered: {
        root: 'border rounded-lg',
        item: 'border-b last:border-b-0 px-4',
        trigger: '',
        content: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
