/**
 * Toggle Group Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Combined Toggle Buttons"
 * - Container: Minimal styling, holds toggle items
 * - Items: Same styling as Toggle component
 * - Active items: Raised shadow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const toggleGroupConfig = {
  slots: {
    /**
     * root: 切换组根容器
     */
    root: [
      'inline-flex items-center justify-center gap-1',
      // Padding
      'p-1',
      // Shape - 大圆角容器
      'rounded-[16px]',
      // Background - 与背景同色
      'bg-surface-1',
      // Shadow - 轻微内凹（作为容器）
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * item: 切换项
     * 继承 Toggle 的样式
     */
    item: [
      // Layout
      'inline-flex items-center justify-center gap-2',
      'whitespace-nowrap',
      // Typography
      'text-sm font-medium',
      // Shape - 圆角（比容器略小）
      'rounded-[12px]',
      // Border - 无边框
      'border-0',
      // Color - 默认透明
      'bg-transparent text-foreground',
      // Shadow - 默认无阴影
      'shadow-none',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 轻微凸起
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:bg-surface-1',
      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
      // Active state - 凸起阴影（激活时）
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
    ],
  },

  variants: {
    variant: {
      /**
       * default: 默认切换组
       */
      default: {
        root: [],
        item: [],
      },

      /**
       * outline: 轮廓切换组
       */
      outline: {
        root: [
          'bg-transparent',
          'shadow-none',
          'border border-border',
        ],
        item: [
          'data-[state=on]:bg-surface-1',
          'data-[state=on]:text-foreground',
          'data-[state=on]:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
        ],
      },
    },

    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        root: [],
        item: [
          'h-9 px-3',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        root: [
          'rounded-[12px]',
        ],
        item: [
          'h-7 px-2 text-xs',
          'rounded-[8px]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        root: [
          'rounded-[20px]',
          'p-1.5',
        ],
        item: [
          'h-11 px-4',
          'rounded-[16px]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
