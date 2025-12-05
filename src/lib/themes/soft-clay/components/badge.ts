export const badgeConfig = {
  slots: {
    /**
     * base: 徽章基础样式
     */
    base: [
      // Layout
      'inline-flex items-center justify-center',
      'whitespace-nowrap',
      // Typography - 小巧精致
      'text-xs font-medium',
      // Shape - 全圆角 (pill)
      'rounded-full',
      'px-3 py-1',
      // Border - 无边框
      'border-0',
      // Shadow - 轻微凸起
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 阴影加深
      'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认徽章
       */
      default: {
        base: [
          'bg-primary text-primary-foreground',
        ],
      },

      /**
       * secondary: 次要徽章
       */
      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
        ],
      },

      /**
       * destructive: 危险徽章
       */
      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
        ],
      },

      /**
       * outline: 轮廓徽章
       */
      outline: {
        base: [
          'bg-surface-1 text-foreground',
          // 轻微内凹效果
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
          'hover:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
