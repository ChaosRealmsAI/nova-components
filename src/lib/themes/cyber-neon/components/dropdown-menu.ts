/**
 * Dropdown Menu Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Dropdown"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Shadow: Soft neon glow
 * - Hover: Item background highlight + glow border
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dropdownMenuConfig = {
  slots: {
    /**
     * content: 菜单内容
     * ─────────────────────────────────────────────────────────────────────
     * 4px 小圆角、霓虹边框、柔和发光
     */
    content: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-[4px]',
      'bg-surface-2',
      'border border-primary',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'p-1',
      'text-foreground',
    ],

    /**
     * item: 菜单项
     * ─────────────────────────────────────────────────────────────────────
     * hover 时背景高亮 + 发光边框
     */
    item: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[4px] px-2 py-1.5 text-sm',
      'outline-none transition-colors duration-150',
      'focus:bg-surface-1 focus:text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
      'hover:bg-surface-1',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * label: 标签
     */
    label: [
      'px-2 py-1.5 text-sm font-semibold',
      'text-foreground',
    ],

    /**
     * separator: 分隔线
     * ─────────────────────────────────────────────────────────────────────
     * 1px 发光线
     */
    separator: [
      '-mx-1 my-1 h-px',
      'bg-border',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
    ],

    /**
     * shortcut: 快捷键
     */
    shortcut: [
      'ml-auto text-xs tracking-widest',
      'text-muted-foreground',
    ],

    /**
     * checkboxItem: 复选菜单项
     */
    checkboxItem: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[4px] px-2 py-1.5 text-sm',
      'outline-none transition-colors duration-150',
      'focus:bg-surface-1 focus:text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
      'hover:bg-surface-1',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * radioItem: 单选菜单项
     */
    radioItem: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[4px] px-2 py-1.5 text-sm',
      'outline-none transition-colors duration-150',
      'focus:bg-surface-1 focus:text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
      'hover:bg-surface-1',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * indicator: 选中指示器
     */
    indicator: [
      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    /**
     * subTrigger: 子菜单触发器
     */
    subTrigger: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[4px] px-2 py-1.5 text-sm',
      'outline-none transition-colors duration-150',
      'focus:bg-surface-1 focus:text-foreground',
      'data-[state=open]:bg-surface-1',
      'hover:bg-surface-1',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * subContent: 子菜单内容
     */
    subContent: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-[4px]',
      'bg-surface-2',
      'border border-primary',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'p-1',
      'text-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        content: [],
        item: [],
        label: [],
        separator: [],
        shortcut: [],
        checkboxItem: [],
        radioItem: [],
        indicator: [],
        subTrigger: [],
        subContent: [],
      },

      /**
       * destructive: 危险样式 (用于菜单项)
       */
      destructive: {
        item: [
          'text-destructive',
          'focus:text-destructive',
          'hover:bg-destructive/10',
          'hover:border-destructive',
          'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--destructive)_30%,transparent)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
