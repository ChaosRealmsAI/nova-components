export const cardConfig = {
  slots: {
    /**
     * base: 卡片容器
     */
    base: [
      // Layout
      'relative flex flex-col',
      'w-full',
      // Shape - 大圆角
      'rounded-[24px]',
      // Background - surface-1（与背景同色）
      'bg-surface-1',
      // Border - 无边框
      'border-0',
      // Shadow - 凸起阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 阴影增强
      'hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      // Text
      'text-foreground',
    ],

    /**
     * header: 卡片头部
     */
    header: [
      'flex items-center justify-between',
      'space-y-1.5',
    ],

    /**
     * title: 卡片标题
     */
    title: [
      'text-lg font-semibold leading-none tracking-tight',
      'text-foreground',
    ],

    /**
     * description: 卡片描述
     */
    description: [
      'text-sm',
      'text-muted-foreground',
    ],

    /**
     * action: 卡片操作区
     */
    action: [
      'flex items-center gap-2',
    ],

    /**
     * content: 卡片内容区
     */
    content: [
      'flex-1',
    ],

    /**
     * footer: 卡片底部
     */
    footer: [
      'flex items-center',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认卡片
       */
      default: {
        base: [],
        header: [],
        title: [],
        description: [],
        action: [],
        content: [],
        footer: [],
      },

      /**
       * outline: 轮廓卡片
       */
      outline: {
        base: [
          // 轻微内凹效果
          'shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
          'hover:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
        ],
      },

      /**
       * ghost: 幽灵卡片
       */
      ghost: {
        base: [
          'bg-transparent',
          'shadow-none',
          'hover:bg-surface-1-hover',
          'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
        ],
      },

      /**
       * elevated: 悬浮卡片
       */
      elevated: {
        base: [
          // 更强的凸起效果
          'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',
          'hover:shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)]',
          'hover:-translate-y-1',
        ],
      },
    },
    size: {
      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'rounded-[16px]',
        ],
        header: [
          'p-4',
        ],
        content: [
          'px-4 pb-4',
        ],
        footer: [
          'px-4 pb-4',
        ],
      },

      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        header: [
          'p-6',
        ],
        content: [
          'px-6 pb-6',
        ],
        footer: [
          'px-6 pb-6',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'rounded-[28px]',
        ],
        header: [
          'p-8',
        ],
        content: [
          'px-8 pb-8',
        ],
        footer: [
          'px-8 pb-8',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
