/**
 * AlertDialog Base Config
 *
 * Block 级别配置，定义布局和语义变体
 * 颜色样式由内部 Dialog 和 Button Atoms 提供
 *
 * Slots:
 * - overlay: 背景遮罩层
 * - content: 对话框主体容器
 * - header: 头部区域
 * - title: 标题
 * - description: 描述文本
 * - footer: 底部区域
 *
 * 依赖的 Atoms: dialog, button
 */
export const alertDialogBaseConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]',
      'gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 rounded-lg text-[length:var(--text-sm)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    header: 'flex flex-col gap-2 text-center sm:text-left',
    title: 'text-[length:var(--text-lg)] leading-none font-semibold text-foreground',
    description: 'text-muted-foreground text-[length:var(--text-sm)]',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
  },
  variants: {
    variant: {
      default: {
        overlay: '',
        content: '',
        header: '',
        title: '',
        description: '',
        footer: '',
      },
      destructive: {
        overlay: '',
        content: 'border-destructive',
        header: '',
        title: 'text-destructive',
        description: '',
        footer: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
