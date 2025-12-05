export const avatarConfig = {
  slots: {
    /**
     * base: 头像容器基础样式
     */
    base: [
      // Layout
      'relative flex items-center justify-center',
      'overflow-hidden',
      // Shape - 完全圆形
      'rounded-full',
      // Border - 无边框
      'border-0',
      // Shadow - 轻微凸起
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 阴影加深
      'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      // Background
      'bg-surface-1',
    ],
  },
  variants: {
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          'h-10 w-10',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-8 w-8',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-12 w-12',
        ],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: [
          'h-16 w-16',
        ],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};

export const avatarFallbackConfig = {
  slots: {
    /**
     * base: 头像回退基础样式
     */
    base: [
      // Layout
      'flex items-center justify-center',
      'h-full w-full',
      // Background
      'bg-muted',
      // Typography
      'font-medium',
      'text-muted-foreground',
      'uppercase',
    ],
  },
  variants: {
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          'text-sm',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'text-xs',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'text-base',
        ],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: [
          'text-xl',
        ],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
