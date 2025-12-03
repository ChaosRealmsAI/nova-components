/**
 * Alert Base Config
 *
 * Block 级别配置，定义布局和语义变体
 *
 * Slots:
 * - base: 警告容器
 * - icon: 图标区域
 * - title: 标题
 * - description: 描述文本
 *
 * 依赖的 Atoms: badge (样式参考)
 */
export const alertBaseConfig = {
  slots: {
    base: [
      'relative w-full rounded-lg border px-4 py-3 text-[length:var(--text-sm)]',
      'grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr]',
      'has-[>svg]:gap-x-3 gap-y-0.5 items-start',
      '[&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
    ],
    icon: 'flex-shrink-0',
    title: 'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
    description: 'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-[length:var(--text-sm)] [&_p]:leading-relaxed',
  },
  variants: {
    variant: {
      default: {
        base: 'bg-background text-foreground border-border',
        icon: '',
        title: '',
        description: '',
      },
      destructive: {
        base: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        icon: '',
        title: 'text-destructive',
        description: 'text-destructive/90',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
