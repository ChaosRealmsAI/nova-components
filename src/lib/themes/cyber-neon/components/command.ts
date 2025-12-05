/**
 * Command Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Command Palette"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Background: bg-surface-1
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const commandConfig = {
  slots: {
    /**
     * root: 命令面板根容器
     */
    root: [
      'flex h-full w-full flex-col overflow-hidden',
      'rounded-[4px] border border-primary',
      'bg-surface-1',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * inputWrapper: 输入框容器
     * ─────────────────────────────────────────────────────────────────────
     * 底部边框 + focus 时发光
     */
    inputWrapper: [
      'flex items-center border-b border-border px-3',
      'transition-all duration-150',
      'has-[:focus]:border-primary',
      'has-[:focus]:shadow-[inset_0_0_10px_color-mix(in_srgb,var(--primary)_15%,transparent)]',
    ],

    /**
     * input: 搜索输入框
     * ─────────────────────────────────────────────────────────────────────
     * bg-surface-1 + 内发光 focus
     */
    input: [
      'flex h-11 w-full rounded-md bg-transparent py-3',
      'text-sm outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-40',
    ],

    /**
     * list: 命令列表
     */
    list: [
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
    ],

    /**
     * empty: 空状态
     */
    empty: [
      'py-6 text-center text-sm',
      'text-muted-foreground',
    ],

    /**
     * group: 命令分组
     */
    group: [
      'overflow-hidden p-1',
      'text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5',
      '[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold',
      '[&_[cmdk-group-heading]]:text-muted-foreground',
    ],

    /**
     * separator: 分隔线
     * ─────────────────────────────────────────────────────────────────────
     * 1px 发光线
     */
    separator: [
      '-mx-1 h-px bg-border',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
    ],

    /**
     * item: 命令项
     * ─────────────────────────────────────────────────────────────────────
     * hover 时背景高亮 + 发光边框
     */
    item: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[4px] px-2 py-1.5 text-sm',
      'outline-none transition-colors duration-150',
      'data-[selected=true]:bg-surface-2',
      'data-[selected=true]:text-foreground',
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40',
      'hover:bg-surface-2',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * shortcut: 快捷键
     */
    shortcut: [
      'ml-auto text-xs tracking-widest',
      'text-muted-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认命令面板
       */
      default: {
        root: [],
        inputWrapper: [],
        input: [],
        list: [],
        empty: [],
        group: [],
        separator: [],
        item: [],
        shortcut: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
