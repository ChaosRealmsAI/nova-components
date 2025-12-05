export const alertDialogConfig = {
  slots: {
    /**
     * overlay: 遮罩层
     */
    overlay: [
      'fixed inset-0 z-50',
      'bg-black/40',
      'backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],

    /**
     * content: 对话框内容
     */
    content: [
      // Layout
      'fixed left-[50%] top-[50%] z-50',
      'translate-x-[-50%] translate-y-[-50%]',
      'grid w-full max-w-lg gap-6 p-8',
      // Shape - 大圆角 24px
      'rounded-[24px]',
      // Background - surface-1
      'bg-surface-1',
      // Border - 无边框
      'border-0',
      // Shadow - 强凸起阴影
      'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',
      // Transition - 200ms
      'transition-all duration-200 ease-in-out',
      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
      'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
      // Focus
      'focus-visible:outline-none',
    ],

    /**
     * header: 头部区域
     */
    header: [
      'flex flex-col space-y-2',
      'text-foreground',
    ],

    /**
     * title: 标题
     */
    title: [
      'text-lg font-semibold',
      'text-foreground',
    ],

    /**
     * description: 描述
     */
    description: [
      'text-sm',
      'text-muted-foreground',
    ],

    /**
     * footer: 底部区域
     */
    footer: [
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认对话框
       */
      default: {
        overlay: [],
        content: [],
        header: [],
        title: [],
        description: [],
        footer: [],
      },

      /**
       * destructive: 危险对话框
       */
      destructive: {
        overlay: [
          // 红色调遮罩
          'bg-destructive/10',
        ],
        content: [
          // 红色边框高光（保持新拟物主义风格）
          'ring-2 ring-destructive/20',
        ],
        header: [],
        title: [
          // 红色标题
          'text-destructive',
        ],
        description: [],
        footer: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
