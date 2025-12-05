export const alertConfig = {
  slots: {
    /**
     * base: 警告框基础样式
     */
    base: [
      // Layout
      'relative w-full flex items-start gap-3',
      // Shape - 中等圆角
      'rounded-[16px]',
      // Padding
      'p-4',
      // Border - 无边框
      'border-0',
      // Shadow - 凸起阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
    ],

    /**
     * icon: 图标样式
     */
    icon: [
      'flex-shrink-0',
      'w-5 h-5',
      'mt-0.5',
    ],

    /**
     * title: 标题样式
     */
    title: [
      'font-semibold text-sm leading-none tracking-tight',
      'mb-1',
    ],

    /**
     * description: 描述样式
     */
    description: [
      'text-sm leading-relaxed',
      'opacity-90',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认警告
       */
      default: {
        base: [
          'bg-surface-1',
          'text-foreground',
        ],
        icon: [
          'text-primary',
        ],
        title: [
          'text-foreground',
        ],
        description: [
          'text-foreground',
        ],
      },

      /**
       * destructive: 危险警告
       */
      destructive: {
        base: [
          // 使用柔和的玫瑰红背景
          'bg-destructive',
          'text-destructive-foreground',
        ],
        icon: [
          'text-destructive-foreground',
        ],
        title: [
          'text-destructive-foreground',
        ],
        description: [
          'text-destructive-foreground',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
