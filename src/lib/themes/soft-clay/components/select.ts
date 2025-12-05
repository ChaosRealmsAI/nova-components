/**
 * Select Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Raised Selector with Inset Dropdown"
 * - Trigger: Large rounded corners (16px), raised effect
 * - Content: Raised dropdown panel
 * - Item: Hover with slight raise
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const selectConfig = {
  slots: {
    /**
     * trigger: 触发按钮（凸起样式）
     */
    trigger: [
      'flex h-10 w-full items-center justify-between',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color
      'bg-surface-1 px-4 py-2',
      'text-sm text-foreground',
      // Shadow - 凸起阴影
      'shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Placeholder
      'placeholder:text-subtle-foreground',
      // Focus
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0',
      // Hover - 阴影加深
      'hover:shadow-[5px_5px_10px_var(--shadow-dark),-5px_-5px_10px_var(--shadow-light)]',
      // Active - 按压效果（内凹）
      'active:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Open state
      'data-[state=open]:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
    ],

    /**
     * content: 下拉内容（凸起浮层）
     */
    content: [
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
      // Shape
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color
      'bg-surface-2',
      'text-foreground',
      // Shadow - 强凸起
      'shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],

    /**
     * viewport: 视口
     */
    viewport: [
      'p-1',
    ],

    /**
     * item: 选项项
     */
    item: [
      'relative flex w-full cursor-default select-none items-center',
      // Shape
      'rounded-[12px]',
      // Spacing
      'py-2 px-3',
      // Text
      'text-sm outline-none',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Focus
      'focus:bg-surface-1-hover',
      'focus:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
      // Hover - 轻微凸起
      'hover:bg-surface-1-hover',
      'hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
      // Active - 内凹
      'active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    /**
     * label: 分组标签
     */
    label: [
      'py-2 px-3',
      'text-xs font-medium text-muted-foreground',
    ],

    /**
     * separator: 分隔线（内凹线）
     */
    separator: [
      '-mx-1 my-1 h-px',
      'bg-gradient-to-r from-transparent via-muted to-transparent',
    ],

    /**
     * indicator: 选中指示器
     */
    indicator: [
      'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    /**
     * scrollButton: 滚动按钮
     */
    scrollButton: [
      'flex cursor-default items-center justify-center py-1',
      'transition-colors duration-200',
      'hover:bg-surface-1-hover',
    ],

    /**
     * icon: 下拉图标
     */
    icon: [
      'h-4 w-4 opacity-50',
      'transition-transform duration-200',
      'data-[state=open]:rotate-180',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认选择器
       */
      default: {
        trigger: [],
        content: [],
        viewport: [],
        item: [],
        label: [],
        separator: [],
        indicator: [],
        scrollButton: [],
        icon: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        trigger: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        trigger: [
          'h-8',
          'text-xs',
          'px-3',
          'rounded-[12px]',
          'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
          'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
