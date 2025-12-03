/**
 * Sonner Base Config
 * Block 级别配置
 *
 * 使用直接类名覆盖 sonner 默认样式（避免 group 选择器因 portal 失效）
 */
export const sonnerBaseConfig = {
  slots: {
    root: '!bg-background !text-foreground !border-border !shadow-lg',
    title: '!text-foreground !font-semibold',
    description: '!text-muted-foreground',
    actionButton: '!bg-primary !text-primary-foreground hover:!bg-primary/90',
    cancelButton: '!bg-muted !text-muted-foreground hover:!bg-muted/80',
    closeButton: '!text-foreground/50 hover:!text-foreground !border-border',
    success: '!border-green-500/50 !bg-green-500/10',
    error: '!border-red-500/50 !bg-red-500/10',
    warning: '!border-yellow-500/50 !bg-yellow-500/10',
    info: '!border-blue-500/50 !bg-blue-500/10',
    icon: '!text-foreground',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
};
