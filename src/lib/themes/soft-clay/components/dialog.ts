export const dialogConfig = {
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
      'grid w-full gap-6',
      // Shape - 大圆角 24px
      'rounded-[24px]',
      // Background - surface-1
      'bg-surface-1',
      // Border - 无边框
      'border-0',
      // Shadow - 强凸起阴影（Dialog 最高层级）
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
      'text-lg font-semibold leading-none tracking-tight',
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

    /**
     * close: 关闭按钮
     */
    close: [
      // Position
      'absolute right-4 top-4',
      // Size
      'h-8 w-8',
      // Shape - 圆形
      'rounded-[12px]',
      // Background
      'bg-surface-1',
      // Shadow - 轻微凸起
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Hover - 内凹效果
      'hover:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Text
      'text-muted-foreground hover:text-foreground',
      // Disabled
      'disabled:pointer-events-none',
      // Focus
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    ],
  },
  variants: {
    size: {
      /**
       * sm: 小尺寸
       */
      sm: {
        content: [
          'max-w-sm p-6',
        ],
      },

      /**
       * default: 默认尺寸
       */
      default: {
        content: [
          'max-w-lg p-8',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        content: [
          'max-w-2xl p-8',
        ],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        content: [
          'max-w-4xl p-10',
        ],
      },

      /**
       * full: 全屏尺寸
       */
      full: {
        content: [
          'max-w-[calc(100vw-4rem)] max-h-[calc(100vh-4rem)] p-10',
        ],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
