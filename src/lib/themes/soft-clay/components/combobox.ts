/**
 * Combobox Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Searchable Dropdown with Soft Input" (带搜索的柔和下拉框)
 * - Trigger: Button-like with raised shadow
 * - Content: Floating panel with command palette inside
 * - Input: Clean search input
 * - Item Hover: Subtle raised effect with gradient background
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const comboboxConfig = {
  slots: {
    /**
     * trigger: 触发按钮
     * 🎨 类似 Button，带凸起阴影
     */
    trigger: [
      // Layout
      'flex h-10 w-full items-center justify-between',
      'px-4 py-2',
      // Shape - 圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color
      'bg-surface-1',
      'text-sm text-foreground',
      // Shadow - 凸起阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 阴影加深
      'hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      // Active - 内凹
      'active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      'active:translate-y-0',
      // Focus
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
      // Placeholder
      '[&_span]:line-clamp-1',
    ],

    /**
     * content: 下拉内容
     * 🎨 悬浮层，包含命令面板
     */
    content: [
      // Layout
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color
      'bg-surface-2',
      'text-foreground',
      // Shadow - 凸起阴影（浮动感）
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      // Animation
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
     * 🎨 无额外阴影，融入 content
     */
    command: [
      'flex h-full w-full flex-col overflow-hidden',
      'rounded-[16px]',
      'bg-transparent',
    ],

    /**
     * inputWrapper: 输入框容器
     * 🎨 顶部搜索区域
     */
    inputWrapper: [
      'flex items-center',
      'border-b border-transparent',
      'px-4',
      // 分隔效果
      'shadow-[0_1px_0_var(--shadow-dark)]',
    ],

    /**
     * input: 搜索输入框
     * 🎨 干净的搜索框
     */
    input: [
      // Layout
      'flex h-11 w-full',
      // Shape - 无圆角
      'rounded-none',
      // Border - 无边框
      'border-0',
      // Color
      'bg-transparent py-3 px-0',
      'text-sm text-foreground',
      // Placeholder
      'placeholder:text-subtle-foreground',
      // Focus
      'outline-none',
      'focus-visible:outline-none',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],

    /**
     * list: 选项列表
     * 🎨 滚动列表
     */
    list: [
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
      'p-1',
    ],

    /**
     * empty: 空状态
     * 🎨 居中提示
     */
    empty: [
      'py-6 text-center text-sm',
      'text-muted-foreground',
    ],

    /**
     * group: 选项分组
     * 🎨 分组容器
     */
    group: [
      'overflow-hidden',
      'p-1',
      'text-foreground',
      // Group heading
      '[&_[cmdk-group-heading]]:px-3',
      '[&_[cmdk-group-heading]]:py-2',
      '[&_[cmdk-group-heading]]:text-xs',
      '[&_[cmdk-group-heading]]:font-medium',
      '[&_[cmdk-group-heading]]:text-muted-foreground',
    ],

    /**
     * item: 选项项
     * 🎨 hover 时轻微凸起
     */
    item: [
      // Layout
      'relative flex cursor-pointer select-none items-center gap-2',
      'px-3 py-2',
      // Shape - 圆角
      'rounded-[12px]',
      // Typography
      'text-sm',
      'outline-none',
      // Transition - 柔和过渡
      'transition-all duration-200 ease-in-out',
      // Hover/Selected - 轻微凸起 + 背景渐变
      'aria-selected:bg-gradient-to-br aria-selected:from-surface-1 aria-selected:to-surface-2',
      'aria-selected:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'aria-selected:-translate-y-px',
      // Active - 内凹
      'active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      'active:translate-y-0',
      // Disabled
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
    ],

    /**
     * searchIcon: 搜索图标
     * 🎨 输入框左侧图标
     */
    searchIcon: [
      'mr-2 h-4 w-4',
      'shrink-0',
      'text-muted-foreground',
    ],

    /**
     * icon: 选项图标
     * 🎨 选项左侧图标
     */
    icon: [
      'mr-2 h-4 w-4',
      'shrink-0',
    ],

    /**
     * separator: 分隔线
     * 🎨 内凹线条效果
     */
    separator: [
      '-mx-1 my-1 h-px',
      // 新拟物主义分隔线
      'bg-gradient-to-r from-transparent via-shadow-dark to-transparent',
      'shadow-[0_1px_0_var(--shadow-light)]',
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
