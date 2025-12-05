/**
 * Menubar Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Menubar"
 * - Similar to Dropdown Menu but for menu bar
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const menubarConfig = {
  slots: {
    /**
     * root: 菜单栏根容器
     */
    root: [
      'flex h-10 items-center space-x-1',
      'rounded-[4px] border border-border',
      'bg-surface-1 p-1',
    ],

    /**
     * trigger: 菜单触发按钮
     */
    trigger: [
      'flex cursor-pointer select-none items-center',
      'rounded-[4px] px-3 py-1.5 text-sm font-medium',
      'outline-none transition-colors duration-150',
      'focus:bg-surface-2 focus:text-foreground',
      'data-[state=open]:bg-surface-2',
      'hover:bg-surface-2',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * content: 菜单内容
     */
    content: [
      'z-50 min-w-[12rem] overflow-hidden',
      'rounded-[4px]',
      'bg-surface-2',
      'border border-primary',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'p-1',
      'text-foreground',
      'data-[state=open]:animate-in data-[state=closed]:fade-out-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    /**
     * item: 菜单项
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
     * checkboxItem: 复选框菜单项
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
       * default: 默认菜单栏
       */
      default: {
        root: [],
        trigger: [],
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
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
