/**
 * Select Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Select"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Shadow: Soft neon glow
 * - Hover: Item background highlight + glow border
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const selectConfig = {
  slots: {
    /**
     * trigger: 触发按钮
     * ─────────────────────────────────────────────────────────────────────
     * 类似 Input 的样式
     */
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-[4px]',
      'bg-surface-1 border border-border',
      'px-3 py-2 text-sm',
      'ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'transition-all duration-150',
      'hover:border-border-vivid',
      'data-[state=open]:border-primary',
      'data-[state=open]:shadow-[0_0_0_1px_var(--primary),0_0_8px_var(--primary)]',
    ],

    /**
     * content: 下拉内容
     */
    content: [
      'relative z-50 min-w-[8rem] overflow-hidden',
      'rounded-[4px]',
      'bg-surface-2 p-1',
      'border border-primary',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'text-foreground',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    /**
     * viewport: 视口
     */
    viewport: [
      'p-1',
    ],

    /**
     * item: 选项项
     * ─────────────────────────────────────────────────────────────────────
     * hover 时背景高亮 + 发光边框
     */
    item: [
      'relative flex w-full cursor-pointer select-none items-center',
      'rounded-[4px] px-2 py-1.5 text-sm',
      'outline-none transition-colors duration-150',
      'focus:bg-surface-1 focus:text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
      'hover:bg-surface-1',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'data-[highlighted]:bg-surface-1',
    ],

    /**
     * label: 分组标签
     */
    label: [
      'px-2 py-1.5 text-sm font-semibold',
      'text-muted-foreground',
    ],

    /**
     * separator: 分隔线
     */
    separator: [
      '-mx-1 my-1 h-px',
      'bg-border',
    ],

    /**
     * indicator: 选中指示器
     */
    indicator: [
      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    /**
     * scrollButton: 滚动按钮
     */
    scrollButton: [
      'flex items-center justify-center',
      'h-9 rounded-[4px]',
      'border border-border',
      'bg-surface-1',
    ],

    /**
     * icon: 下拉图标
     */
    icon: [
      'h-4 w-4 opacity-50',
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
          'h-8 px-2 text-xs',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
