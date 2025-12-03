/**
 * InputGroup Base Config
 *
 * Block 级别配置，定义输入框组组件的布局和样式变体
 * 依赖的 Atoms: input, button
 */
export const inputGroupBaseConfig = {
  slots: {
    root: 'flex',
    input: 'flex-1',
    button: '',
    addon: 'inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-input',
  },
  variants: {
    variant: {
      default: {
        root: '',
      },
      attached: {
        root: '',
        input: 'rounded-r-none border-r-0 focus:z-10',
        button: 'rounded-l-none',
        addon: 'rounded-l-md border-r-0',
      },
    },
    size: {
      default: {
        addon: 'h-9',
      },
      sm: {
        addon: 'h-8 text-xs',
      },
      lg: {
        addon: 'h-10',
      },
    },
  },
  defaultVariants: {
    variant: 'attached' as const,
    size: 'default' as const,
  },
} as const;
