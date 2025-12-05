/**
 * Combobox Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Combobox"
 * - Similar to Select + Command combination
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const comboboxConfig = {
  slots: {
    /**
     * trigger: 触发按钮
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
      'bg-surface-2',
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
     * command: 命令面板
     */
    command: [
      'flex h-full w-full flex-col overflow-hidden',
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
     * list: 选项列表
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
     * group: 选项分组
     */
    group: [
      'overflow-hidden p-1',
      'text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5',
      '[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold',
      '[&_[cmdk-group-heading]]:text-muted-foreground',
    ],

    /**
     * item: 选项项
     */
    item: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[4px] px-2 py-1.5 text-sm',
      'outline-none transition-colors duration-150',
      'data-[selected=true]:bg-surface-1',
      'data-[selected=true]:text-foreground',
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40',
      'hover:bg-surface-1',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * searchIcon: 搜索图标
     */
    searchIcon: [
      'mr-2 h-4 w-4 shrink-0 opacity-50',
    ],

    /**
     * icon: 选项图标
     */
    icon: [
      'mr-2 h-4 w-4 shrink-0',
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
  },
  variants: {
    variant: {
      /**
       * default: 默认组合框
       */
      default: {
        trigger: [],
        content: [],
        command: [],
        inputWrapper: [],
        input: [],
        list: [],
        empty: [],
        group: [],
        item: [],
        searchIcon: [],
        icon: [],
        separator: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
