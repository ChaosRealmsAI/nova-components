export const drawerConfig = {
  slots: {
    /**
     * overlay: 遮罩层
     */
    overlay: [
      'fixed inset-0 z-50',
      'bg-black/40',
      'backdrop-blur-sm',
    ],

    /**
     * content: 抽屉内容
     */
    content: [
      // Layout
      'fixed z-50',
      'flex flex-col gap-6 p-8',
      // Background - surface-1
      'bg-surface-1',
      // Border - 无边框
      'border-0',
      // Shadow - 凸起阴影
      'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',
      // Transition - 200ms
      'transition-all duration-200 ease-in-out',
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
      'mt-auto',
    ],

    /**
     * handle: 拖拽手柄
     */
    handle: [
      // Layout
      'mx-auto mb-4',
      'h-1.5 w-12',
      // Shape - 全圆角
      'rounded-[9999px]',
      // Background
      'bg-muted',
      // Shadow - 轻微内凹（模拟凹槽）
      'shadow-[inset_1px_1px_2px_var(--shadow-dark),inset_-1px_-1px_2px_var(--shadow-light)]',
    ],
  },
  variants: {
    /**
     * direction: 抽屉方向
     */
    direction: {
      /**
       * bottom: 从底部滑出
       */
      bottom: {
        content: [
          // Position
          'inset-x-0 bottom-0 mt-24',
          // Shape - 顶部圆角
          'rounded-t-[24px]',
          // Max height
          'max-h-[80vh]',
        ],
      },

      /**
       * top: 从顶部滑出
       */
      top: {
        content: [
          // Position
          'inset-x-0 top-0 mb-24',
          // Shape - 底部圆角
          'rounded-b-[24px]',
          // Max height
          'max-h-[80vh]',
        ],
      },

      /**
       * left: 从左侧滑出
       */
      left: {
        content: [
          // Position
          'inset-y-0 left-0 h-full w-3/4',
          // Shape - 右侧圆角
          'rounded-r-[24px]',
          // Max width
          'sm:max-w-md',
        ],
      },

      /**
       * right: 从右侧滑出
       */
      right: {
        content: [
          // Position
          'inset-y-0 right-0 h-full w-3/4',
          // Shape - 左侧圆角
          'rounded-l-[24px]',
          // Max width
          'sm:max-w-md',
        ],
      },
    },
  },
  defaultVariants: {
    direction: 'bottom',
  },
};
