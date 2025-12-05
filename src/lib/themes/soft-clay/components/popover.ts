export const popoverConfig = {
  slots: {
    /**
     * content: 弹出内容
     */
    content: [
      // Layout
      'z-50 w-72 p-4',
      // Shape - 中圆角 16px
      'rounded-[16px]',
      // Background - surface-2（悬浮层）
      'bg-surface-2',
      // Border - 无边框
      'border-0',
      // Shadow - 凸起阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      // Transition - 200ms
      'transition-all duration-200 ease-in-out',
      // Text
      'text-foreground',
      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
      // Focus
      'focus-visible:outline-none',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认弹出框
       */
      default: {
        content: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
