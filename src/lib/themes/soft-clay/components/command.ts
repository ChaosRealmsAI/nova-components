/**
 * Command Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Command Palette with Soft Input" (柔和输入的命令面板)
 * - Root: Large rounded container (16px)
 * - Input: Inset shadow (simulates sunken input)
 * - List: Clean scrollable area
 * - Item Hover: Subtle raised effect with gradient background
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const commandConfig = {
  slots: {
    /**
     * root: 命令面板根容器
     * 🎨 16px 圆角 + 凸起阴影
     */
    root: [
      // Layout
      'flex h-full w-full flex-col overflow-hidden',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color
      'bg-surface-2',
      'text-foreground',
      // Shadow - 凸起阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
    ],

    /**
     * inputWrapper: 输入框容器
     * 🎨 顶部输入区域
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
     * 🎨 内凹阴影（始终凹入）
     */
    input: [
      // Layout
      'flex h-12 w-full',
      // Shape - 无圆角（融入容器）
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
     * list: 命令列表
     * 🎨 干净的滚动区域
     */
    list: [
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
      'p-1',
      // 柔和滚动条（在 playground.ts 中定义）
    ],

    /**
     * empty: 空状态
     * 🎨 居中的提示文字
     */
    empty: [
      'py-6 text-center text-sm',
      'text-muted-foreground',
    ],

    /**
     * group: 命令分组
     * 🎨 分组标题
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
     * separator: 分隔线
     * 🎨 内凹线条效果
     */
    separator: [
      '-mx-1 my-1 h-px',
      // 新拟物主义分隔线
      'bg-gradient-to-r from-transparent via-shadow-dark to-transparent',
      'shadow-[0_1px_0_var(--shadow-light)]',
    ],

    /**
     * item: 命令项
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
     * shortcut: 快捷键
     * 🎨 右侧快捷键提示
     */
    shortcut: [
      'ml-auto text-xs',
      'tracking-widest',
      'text-subtle-foreground',
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
