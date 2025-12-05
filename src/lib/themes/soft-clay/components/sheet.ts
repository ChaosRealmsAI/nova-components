export const sheetConfig = {
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
     * content: 内容
     */
    content: [
      // Layout
      'fixed z-50 gap-6 p-8',
      'flex flex-col',
      // Background - surface-1
      'bg-surface-1',
      // Border - 无边框
      'border-0',
      // Shadow - 凸起阴影（侧边进入）
      'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',
      // Transition - 200ms
      'transition-all duration-200 ease-in-out',
      // Focus
      'focus-visible:outline-none',
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

    /**
     * header: 头部区域
     */
    header: [
      'flex flex-col space-y-2',
      'text-foreground',
    ],

    /**
     * footer: 底部区域
     */
    footer: [
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      'mt-auto',
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
  },
  variants: {
    side: {
      /**
       * right: 右侧
       */
      right: {
        content: [
          // Position
          'inset-y-0 right-0 h-full w-3/4 sm:max-w-md',
          // Shape - 左侧圆角
          'rounded-l-[24px]',
          // Animation
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
      },

      /**
       * left: 左侧
       */
      left: {
        content: [
          // Position
          'inset-y-0 left-0 h-full w-3/4 sm:max-w-md',
          // Shape - 右侧圆角
          'rounded-r-[24px]',
          // Animation
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        ],
      },

      /**
       * top: 顶部
       */
      top: {
        content: [
          // Position
          'inset-x-0 top-0 w-full h-3/4 sm:max-h-[600px]',
          // Shape - 底部圆角
          'rounded-b-[24px]',
          // Animation
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
      },

      /**
       * bottom: 底部
       */
      bottom: {
        content: [
          // Position
          'inset-x-0 bottom-0 w-full h-3/4 sm:max-h-[600px]',
          // Shape - 顶部圆角
          'rounded-t-[24px]',
          // Animation
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
};
