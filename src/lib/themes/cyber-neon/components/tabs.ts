/**
 * Tabs Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Tabs"
 * - Shape: No radius (sharp corners)
 * - Border: Bottom 2px indicator line
 * - Active: Neon glow on active tab
 * - Hover: Text brighten
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
      'inline-flex h-10 items-center justify-center',
      'rounded-none bg-surface-1 p-1',
      'text-muted-foreground',
    ],

    /**
     * trigger: 标签触发器
     * ─────────────────────────────────────────────────────────────────────
     * 大写字体、底部2px发光指示线、hover文字变亮、激活项发光
     */
    trigger: [
      // Layout
      'inline-flex items-center justify-center whitespace-nowrap',
      'px-4 py-3',

      // Typography - 赛博朋克风格：大写+加宽字距
      'text-sm font-medium uppercase tracking-[0.05em]',

      // Shape - 无圆角
      'rounded-none',

      // Color
      'text-muted-foreground',

      // Border - 底部2px指示线（默认透明）
      'border-b-2 border-transparent',

      // Transition
      'transition-all duration-150 ease-out',

      // Hover - 文字变亮
      'hover:text-foreground',

      // Active state - 底部霓虹发光指示线
      'data-[state=active]:text-primary',
      'data-[state=active]:border-b-primary',
      'data-[state=active]:shadow-[0_2px_8px_var(--primary)]',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-40',
    ],

    /**
     * content: 标签内容
     */
    content: [
      'mt-2 ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
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
       * underline: 下划线样式
       */
      underline: {
        root: [],
        list: [
          'bg-transparent',
        ],
        trigger: [
          'border-b-2 border-transparent',
          'data-[state=active]:border-b-primary',
          'data-[state=active]:shadow-[0_2px_0_var(--primary),0_0_8px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
        ],
        content: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
