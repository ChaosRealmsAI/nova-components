export const collapsibleBaseConfig = {
  slots: {
    base: '',
    trigger: 'flex items-center justify-between w-full',
    content: 'overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
  },
  variants: {
    variant: {
      default: {},
      bordered: {
        base: 'border rounded-lg',
        trigger: 'px-4 py-3 hover:bg-muted/50',
        content: 'px-4 pb-4',
      },
      ghost: {
        trigger: 'hover:bg-muted/50 rounded-md px-2 py-1',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
