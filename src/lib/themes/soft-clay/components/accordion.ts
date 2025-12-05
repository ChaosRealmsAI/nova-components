/**
 * Accordion Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neumorphic Accordion"
 * - Shape: 24px rounded for cards
 * - Shadow: Raised cards, inset when expanded
 * - Typography: Normal case, medium weight
 * - Interaction: Hover = shadow intensify, Expanded = content inset
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
     * 凸起卡片效果
     */
    item: [
      'mb-4',
      'rounded-[24px]',
      'bg-surface-1',
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      'transition-all duration-200',
      // Hover时阴影加深
      'hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
    ],

    /**
     * header: 头部
     */
    header: [],

    /**
     * trigger: 触发器
     * ─────────────────────────────────────────────────────────────────────
     * 柔和字体、full width
     */
    trigger: [
      // Layout
      'flex flex-1 items-center justify-between',
      'py-4 px-6',

      // Typography - 柔和字重
      'text-sm font-medium',

      // Color
      'text-foreground',

      // Transition
      'transition-all duration-200 ease-in-out',

      // Hover - 文字变色
      'hover:text-primary',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2',

      // Open state
      'data-[state=open]:text-primary',

      // Disabled
      '[&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:opacity-50',
    ],

    /**
     * chevron: 箭头图标
     */
    chevron: [
      'h-4 w-4',
      'text-muted-foreground',
      'shrink-0',
      'transition-transform duration-200',
      // 展开时旋转
      'group-data-[state=open]:rotate-180',
      // Hover时变色
      'group-hover:text-primary',
    ],

    /**
     * content: 内容
     * ─────────────────────────────────────────────────────────────────────
     * 展开时内凹效果
     */
    content: [
      'overflow-hidden',
      'text-sm',

      // Animation
      'transition-all duration-200',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',

      // Open state - 内凹阴影
      'data-[state=open]:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      'data-[state=open]:rounded-b-[24px]',
    ],

    /**
     * contentInner: 内容内部
     */
    contentInner: [
      'pb-4 pt-0 px-6',
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
       * bordered: 边框样式 - 完整凸起卡片
       */
      bordered: {
        root: [
          'rounded-[24px]',
          'bg-surface-1',
          'p-4',
          'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',
        ],
        item: [
          'mb-2 last:mb-0',
          'rounded-[16px]',
          'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
        ],
        header: [],
        trigger: [
          'px-4',
        ],
        chevron: [],
        content: [
          'rounded-b-[16px]',
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
