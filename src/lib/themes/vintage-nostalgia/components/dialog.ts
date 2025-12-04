/**
 * Dialog 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式对话框效果
 * 纸质弹窗质感
 */
export const dialogConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50',
      'bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],

    content: [
      'fixed left-[50%] top-[50%] z-50',
      'grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4',
      // 锐利边角
      'rounded-[2px]',
      // 粗边框
      'border-2 border-border',
      // 背景
      'bg-surface-1 p-6',
      // 阴影
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.1),6px_6px_0_0_rgba(44,24,16,0.3)]',
      // 动画
      'duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
      'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    ],

    header: 'flex flex-col space-y-1.5 text-center sm:text-left',

    title: 'font-serif text-lg font-bold uppercase tracking-wide text-foreground',

    description: 'font-serif text-sm text-muted-foreground',

    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',

    close: [
      'absolute right-4 top-4',
      'rounded-[1px] opacity-70',
      'ring-offset-background',
      'transition-opacity duration-200',
      'hover:opacity-100',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:pointer-events-none',
    ],
  },
};
