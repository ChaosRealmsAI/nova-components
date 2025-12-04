/**
 * Form 组件样式 - shadcn-default 主题
 */
export const formConfig = {
  slots: {
    root: '',
    item: '',
    label: 'text-foreground',
    control: '',
    description: 'text-muted-foreground',
    message: 'text-destructive',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: '',
        label: '',
        control: '',
        description: '',
        message: '',
      },
      inline: {
        root: '',
        item: '',
        label: 'min-w-[100px]',
        control: 'flex-1',
        description: '',
        message: '',
      },
    },
    size: {
      default: {
        root: '',
        item: '',
        label: 'text-[length:var(--text-sm)]',
        control: '',
        description: 'text-[length:var(--text-sm)]',
        message: 'text-[length:var(--text-sm)]',
      },
      sm: {
        root: '',
        item: '',
        label: 'text-[length:var(--text-xs)]',
        control: '',
        description: 'text-[length:var(--text-xs)]',
        message: 'text-[length:var(--text-xs)]',
      },
      lg: {
        root: '',
        item: '',
        label: 'text-[length:var(--text-base)]',
        control: '',
        description: 'text-[length:var(--text-base)]',
        message: 'text-[length:var(--text-base)]',
      },
    },
  },
};
