/**
 * Tabs Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neumorphic Tabs"
 * - Shape: 16px rounded
 * - Shadow: Active tab raised (convex), inactive flat
 * - Typography: Normal case, medium weight
 * - Interaction: Hover = shadow intensify, Active = raised effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tabsConfig = {
  slots: {
    /**
     * root: 标签页根容器
     */
    root: [
      'w-full',
    ],

    /**
     * list: 标签列表
     */
    list: [
      'inline-flex items-center justify-start',
      'gap-2',
      'bg-surface-1',
      'p-1',
      'rounded-[16px]',
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * trigger: 标签触发器
     * ─────────────────────────────────────────────────────────────────────
     * 激活时凸起阴影
     */
    trigger: [
      // Layout
      'inline-flex items-center justify-center',
      'whitespace-nowrap px-4 py-2',

      // Typography - 柔和字重
      'text-sm font-medium',

      // Shape - 16px圆角
      'rounded-[16px]',

      // Color
      'text-muted-foreground',

      // Border - 无边框
      'border-0',

      // Transition
      'transition-all duration-200 ease-in-out',

      // Default state - flat
      'bg-surface-1',
      'shadow-none',

      // Hover - 轻微凸起
      'hover:text-foreground',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:-translate-y-0.5',

      // Active state - 凸起阴影
      'data-[state=active]:bg-surface-1',
      'data-[state=active]:text-primary',
      'data-[state=active]:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      'data-[state=active]:-translate-y-1',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
    ],

    /**
     * content: 标签内容
     */
    content: [
      'mt-4',
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [],
        list: [],
        trigger: [],
        content: [],
      },

      /**
       * underline: 下划线样式 - 扁平设计
       */
      underline: {
        root: [],
        list: [
          'bg-transparent',
          'shadow-none',
          'border-b-2 border-border',
        ],
        trigger: [
          'rounded-t-[12px] rounded-b-none',
          'data-[state=active]:border-b-2',
          'data-[state=active]:border-primary',
        ],
        content: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
