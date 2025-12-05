/**
 * Collapsible Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neumorphic Collapse"
 * - Shape: 16px rounded
 * - Shadow: Raised trigger, inset content when open
 * - Typography: Normal case, medium weight
 * - Interaction: Similar to accordion, raised/inset交互
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const collapsibleConfig = {
  slots: {
    /**
     * base: 容器样式
     */
    base: [
      'w-full',
    ],

    /**
     * trigger: 触发器按钮样式
     * ─────────────────────────────────────────────────────────────────────
     * 凸起效果、hover 增强、open 时内凹
     */
    trigger: [
      // Layout
      'flex items-center justify-between',
      'w-full py-3 px-4',

      // Typography - 柔和字重
      'text-sm font-medium',

      // Shape - 16px圆角
      'rounded-[16px]',

      // Color
      'text-foreground',
      'bg-surface-1',

      // Border - 无边框
      'border-0',

      // Shadow - 凸起双阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',

      // Transition
      'transition-all duration-200 ease-in-out',

      // Hover - 阴影加深 + 上移
      'hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'hover:text-primary',

      // Open state - 内凹效果
      'data-[state=open]:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      'data-[state=open]:translate-y-0',
      'data-[state=open]:text-primary',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
    ],

    /**
     * content: 内容区域样式
     * ─────────────────────────────────────────────────────────────────────
     * 展开时内凹阴影
     */
    content: [
      'overflow-hidden',
      'mt-2 p-4',

      // Shape - 16px圆角
      'rounded-[16px]',

      // Color
      'bg-surface-1',

      // Border - 无边框
      'border-0',

      // Shadow - 内凹阴影
      'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',

      // Animation
      'transition-all duration-200',
      'data-[state=closed]:animate-collapsible-up',
      'data-[state=open]:animate-collapsible-down',

      // Text
      'text-sm text-muted-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
        trigger: [],
        content: [],
      },

      /**
       * bordered: 边框样式 - 完整容器凸起
       */
      bordered: {
        base: [
          'rounded-[24px]',
          'bg-surface-1',
          'p-4',
          'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',
          // Hover时整体阴影加深
          'hover:shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)]',
        ],
        trigger: [
          'shadow-none',
          'px-0',
          'hover:shadow-none',
        ],
        content: [
          'shadow-none',
          'px-0',
        ],
      },

      /**
       * ghost: 幽灵样式 - 扁平设计
       */
      ghost: {
        base: [],
        trigger: [
          'shadow-none',
          'hover:bg-surface-2',
          'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
        ],
        content: [
          'shadow-none',
          'px-0',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
