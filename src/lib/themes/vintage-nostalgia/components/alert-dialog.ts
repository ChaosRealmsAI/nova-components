/**
 * AlertDialog 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式警告对话框效果
 * 严肃的公告牌质感
 */
export const alertDialogConfig = {
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

    header: 'flex flex-col space-y-2 text-center sm:text-left',

    title: 'font-serif text-lg font-bold uppercase tracking-wide text-foreground',

    description: 'font-serif text-sm text-muted-foreground',

    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  },

  variants: {
    variant: {
      default: {},

      destructive: {
        content: [
          'border-destructive',
          'shadow-[inset_0_2px_4px_rgba(183,28,28,0.1),6px_6px_0_0_rgba(183,28,28,0.3)]',
        ],
      },
    },
  },
};
