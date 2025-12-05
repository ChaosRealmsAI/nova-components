/**
 * Collapsible Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Collapsible"
 * - Simple collapsible with neon accents
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const collapsibleConfig = {
  slots: {
    /**
     * base: 容器样式
     */
    base: [
      'w-full space-y-4',
    ],

    /**
     * trigger: 触发器按钮样式
     * ─────────────────────────────────────────────────────────────────────
     * 大写字体、霓虹边框、hover发光
     */
    trigger: [
      // Layout
      'flex items-center justify-between',
      'w-full py-3 px-4',

      // Typography - 赛博朋克风格：大写+加宽字距
      'text-sm font-medium uppercase tracking-[0.05em]',

      // Shape
      'rounded',

      // Color
      'text-foreground',
      'bg-transparent',

      // Border - 霓虹边框
      'border border-border',

      // Transition
      'transition-all duration-150 ease-out',

      // Hover - 发光边框
      'hover:border-primary',
      'hover:text-primary',
      'hover:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',

      // Open state
      'data-[state=open]:border-primary',
      'data-[state=open]:text-primary',
      'data-[state=open]:shadow-[inset_0_0_10px_color-mix(in_srgb,var(--primary)_15%,transparent),0_0_8px_var(--primary)]',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-40',
    ],

    /**
     * content: 内容区域样式
     * ─────────────────────────────────────────────────────────────────────
     * 展开时轻微发光
     */
    content: [
      'overflow-hidden',
      'mt-2 p-4',

      // Shape
      'rounded',

      // Border
      'border border-border',

      // Animation
      'transition-all duration-150',
      'data-[state=closed]:animate-collapsible-up',
      'data-[state=open]:animate-collapsible-down',

      // Open state - 边框发光
      'data-[state=open]:border-primary',
      'data-[state=open]:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',

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
        base: [
          // 继承 slots.base 的所有样式
        ],
        trigger: [
          // 继承 slots.trigger 的所有样式
        ],
        content: [
          // 继承 slots.content 的所有样式
        ],
      },

      /**
       * bordered: 边框样式 - 完整容器边框
       */
      bordered: {
        base: [
          'rounded',
          'border border-border',
          'p-4',
          // Hover时整体发光
          'hover:border-primary',
          'hover:shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
        ],
        trigger: [
          'border-0',
          'px-0',
        ],
        content: [
          'border-0',
          'px-0',
        ],
      },

      /**
       * ghost: 幽灵样式 - 无边框
       */
      ghost: {
        base: [],
        trigger: [
          'border-0',
          'shadow-none',
          'hover:bg-surface-1',
          'hover:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent)]',
        ],
        content: [
          'border-0',
          'px-0',
          'shadow-none',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
