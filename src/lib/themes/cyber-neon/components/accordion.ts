/**
 * Accordion Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Accordion"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Hover: Glow intensify
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const accordionConfig = {
  slots: {
    /**
     * root: 根容器
     */
    root: [
      'w-full',
    ],

    /**
     * item: 折叠项
     * ─────────────────────────────────────────────────────────────────────
     * 霓虹边框分隔
     */
    item: [
      'border-b border-border',
      'transition-all duration-150',
      // Hover时整个item边框发光
      'hover:border-primary',
      'hover:shadow-[0_1px_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * header: 头部
     */
    header: [],

    /**
     * trigger: 触发器
     * ─────────────────────────────────────────────────────────────────────
     * 大写字体、full width、hover发光
     */
    trigger: [
      // Layout
      'flex flex-1 items-center justify-between',
      'py-4 px-1',

      // Typography - 赛博朋克风格：大写+加宽字距
      'text-sm font-medium uppercase tracking-[0.05em]',

      // Color
      'text-foreground',

      // Transition
      'transition-all duration-150 ease-out',

      // Hover - 文字变亮
      'hover:text-primary',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Open state
      'data-[state=open]:text-primary',

      // Disabled
      '[&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:opacity-40',
    ],

    /**
     * chevron: 箭头图标
     */
    chevron: [
      'h-4 w-4',
      'text-muted-foreground',
      'shrink-0',
      'transition-transform duration-150',
      // 展开时旋转
      'group-data-[state=open]:rotate-180',
      // Hover时发光色
      'group-hover:text-primary',
    ],

    /**
     * content: 内容
     * ─────────────────────────────────────────────────────────────────────
     * 展开时轻微内发光
     */
    content: [
      'overflow-hidden',
      'text-sm',

      // Animation
      'transition-all duration-150',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',

      // Open state - 轻微发光效果
      'data-[state=open]:shadow-[inset_0_2px_4px_color-mix(in_srgb,var(--primary)_10%,transparent)]',
    ],

    /**
     * contentInner: 内容内部
     */
    contentInner: [
      'pb-4 pt-0 px-1',
      'text-muted-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [],
        item: [],
        header: [],
        trigger: [],
        chevron: [],
        content: [],
        contentInner: [],
      },

      /**
       * bordered: 边框样式 - 完整霓虹边框
       */
      bordered: {
        root: [
          'rounded',
          'border border-border',
        ],
        item: [
          'border-b border-border',
          'last:border-b-0',
          // Hover时发光
          'hover:border-primary',
        ],
        header: [],
        trigger: [
          'px-4',
        ],
        chevron: [],
        content: [
          // 内边框发光
          'data-[state=open]:border-t border-border',
        ],
        contentInner: [
          'px-4',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
