/**
 * Toggle Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Pressable Toggle Button"
 * - Shape: Large rounded corners (16px)
 * - Border: No border
 * - Default: Flat or subtle inset
 * - Active: Raised shadow (activated state)
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const toggleConfig = {
  slots: {
    /**
     * base: 切换按钮基础样式
     */
    base: [
      // Layout
      'inline-flex items-center justify-center gap-2',
      // Typography
      'text-sm font-medium',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color - 默认与背景同色
      'bg-surface-1 text-foreground',
      // Shadow - 轻微内凹（未激活状态）
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 内凹加深
      'hover:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
      // Active state - 凸起阴影（激活时）
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      'data-[state=on]:hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
      },

      /**
       * outline: 轮廓样式
       */
      outline: {
        base: [
          'bg-transparent',
          'shadow-none',
          'border border-border',
          'hover:bg-surface-1',
          'hover:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
          'data-[state=on]:bg-surface-1',
          'data-[state=on]:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          'h-10 px-4',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-8 px-3 text-xs',
          'rounded-[12px]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-12 px-6',
          'rounded-[20px]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
