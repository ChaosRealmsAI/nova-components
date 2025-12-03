/**
 * Form Base Config
 *
 * Block 级别配置，定义表单组件的布局和样式变体
 * 依赖的 Atoms: label, input, button
 */
export const formBaseConfig = {
  slots: {
    root: 'space-y-6',
    item: 'space-y-2',
    label: '',
    control: '',
    description: 'text-muted-foreground text-sm',
    message: 'text-destructive text-sm font-medium',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: '',
      },
      inline: {
        root: 'space-y-4',
        item: 'flex items-center gap-4 space-y-0',
      },
    },
    size: {
      default: {
        item: 'space-y-2',
      },
      sm: {
        item: 'space-y-1',
      },
      lg: {
        item: 'space-y-3',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    size: 'default' as const,
  },
} as const;
