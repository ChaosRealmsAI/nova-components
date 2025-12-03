/**
 * Dialog Base Config
 *
 * Block 级别配置，定义对话框布局和样式
 * 基于 @radix-ui/react-dialog
 *
 * Slots:
 * - overlay: 背景遮罩层
 * - content: 对话框主体容器
 * - header: 头部区域
 * - title: 标题
 * - description: 描述文本
 * - footer: 底部区域
 * - close: 关闭按钮
 *
 * 依赖的 Atoms: button
 */
export const dialogBaseConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ].join(' '),
    content: [
      'fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]',
      'gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 rounded-lg text-[length:var(--text-sm)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ].join(' '),
    header: 'flex flex-col gap-2 text-center sm:text-left',
    title: 'text-[length:var(--text-lg)] leading-none font-semibold text-foreground',
    description: 'text-muted-foreground text-[length:var(--text-sm)]',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    close: [
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
      'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
    ].join(' '),
  },
  variants: {
    size: {
      sm: {
        content: 'max-w-sm',
      },
      default: {
        content: 'max-w-lg',
      },
      lg: {
        content: 'max-w-2xl',
      },
      xl: {
        content: 'max-w-4xl',
      },
      full: {
        content: 'max-w-[calc(100%-2rem)]',
      },
    },
  },
  defaultVariants: {
    size: 'default' as const,
  },
};
