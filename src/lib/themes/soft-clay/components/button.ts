export const buttonConfig = {
  slots: {
    /**
     * base: 按钮基础样式
     */
    base: [
      // Layout
      'inline-flex items-center justify-center gap-2',
      'whitespace-nowrap',
      // Typography - 柔和字重
      'text-sm font-medium',
      // Shape - 新拟物主义圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Shadow - 凸起双阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      // Transition - 略慢，更柔和
      'transition-all duration-200 ease-in-out',
      // Hover - 阴影加深 + 上移
      'hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      // Active - 内凹效果
      'active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      'active:translate-y-0',
      // Disabled
      'disabled:opacity-50 disabled:pointer-events-none',
      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 主要按钮
       */
      default: {
        base: [
          'bg-primary text-primary-foreground',
        ],
      },

      /**
       * destructive: 危险按钮
       */
      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
        ],
      },

      /**
       * outline: 轮廓按钮
       */
      outline: {
        base: [
          'bg-surface-1 text-foreground',
          // 轻微内凹，模拟轮廓效果
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
          'hover:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
          'active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
        ],
      },

      /**
       * secondary: 次要按钮
       */
      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
        ],
      },

      /**
       * ghost: 幽灵按钮
       */
      ghost: {
        base: [
          'bg-transparent text-foreground',
          'shadow-none',
          'hover:bg-surface-1-hover',
          'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
        ],
      },

      /**
       * link: 链接按钮
       */
      link: {
        base: [
          'bg-transparent text-primary',
          'shadow-none',
          'underline-offset-4 hover:underline',
          'hover:shadow-none hover:translate-y-0',
          'active:shadow-none',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          'h-10 px-6 py-2',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-8 px-4 py-1.5 text-xs',
          'rounded-[12px]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-12 px-8 py-3',
          'rounded-[20px]',
        ],
      },

      /**
       * icon: 图标尺寸
       */
      icon: {
        base: [
          'h-10 w-10 p-0',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
