/**
 * ButtonGroup Base Config
 *
 * Block 级别配置，定义按钮组的布局和样式变体
 * 依赖的 Atoms: button
 */
export const buttonGroupBaseConfig = {
  slots: {
    root: 'inline-flex items-center',
  },
  variants: {
    variant: {
      default: {
        root: '',
      },
      outline: {
        root: '',
      },
    },
    size: {
      default: {
        root: '',
      },
      sm: {
        root: '',
      },
      lg: {
        root: '',
      },
    },
    attached: {
      true: {
        root: '[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md [&>button:not(:first-child)]:-ml-px',
      },
      false: {
        root: 'gap-2',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    size: 'default' as const,
    attached: true as const,
  },
} as const;
