/**
 * Drawer 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式抽屉滑出效果
 * 木质抽屉质感
 */
export const drawerConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50',
      'bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],

    content: [
      'fixed z-50 gap-4',
      'bg-surface-1 p-6',
      // 粗边框
      'border-2 border-border',
      // 阴影
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.1),0_8px_16px_rgba(44,24,16,0.3)]',
      'transition ease-in-out',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:duration-300 data-[state=open]:duration-500',
    ],

    header: 'grid gap-1.5 text-center sm:text-left',

    title: 'font-serif text-lg font-bold uppercase tracking-wide text-foreground',

    description: 'font-serif text-sm text-muted-foreground',

    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',

    handle: 'mx-auto mt-4 h-2 w-[100px] rounded-full bg-border',
  },

  variants: {
    direction: {
      bottom: {
        content: [
          'inset-x-0 bottom-0',
          'border-t-2 rounded-t-[2px]',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },

      top: {
        content: [
          'inset-x-0 top-0',
          'border-b-2 rounded-b-[2px]',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
      },

      left: {
        content: [
          'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm',
          'border-r-2 rounded-r-[2px]',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        ],
      },

      right: {
        content: [
          'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm',
          'border-l-2 rounded-l-[2px]',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
      },
    },
  },
};
