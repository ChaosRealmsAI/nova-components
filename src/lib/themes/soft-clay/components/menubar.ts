/**
 * Menubar Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Horizontal Menu Bar with Soft Buttons" (柔和按钮的水平菜单栏)
 * - Root: Clean horizontal container
 * - Trigger: Medium rounded (16px), raised on activation
 * - Content: Same as dropdown menu (16px rounded, floating)
 * - Item Hover: Subtle raised effect with gradient background
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const menubarConfig = {
  slots: {
    /**
     * root: 菜单栏根容器
     * 🎨 简洁的水平布局
     */
    root: [
      'flex h-10 items-center space-x-1',
      'rounded-[16px]',
      'bg-surface-1 p-1',
      // 轻微凸起
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
    ],

    /**
     * trigger: 菜单触发按钮
     * 🎨 16px 圆角，激活时凸起
     */
    trigger: [
      // Layout
      'flex cursor-pointer select-none items-center gap-1',
      'px-3 py-1.5',
      // Shape - 圆角
      'rounded-[12px]',
      // Typography
      'text-sm font-medium',
      'outline-none',
      // Transition - 柔和过渡
      'transition-all duration-200 ease-in-out',
      // Hover - 轻微凸起
      'hover:bg-gradient-to-br hover:from-surface-1 hover:to-surface-2',
      'hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
      // Active/Open state - 凸起效果
      'data-[state=open]:bg-gradient-to-br data-[state=open]:from-surface-1 data-[state=open]:to-surface-2',
      'data-[state=open]:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Focus
      'focus:bg-gradient-to-br focus:from-surface-1 focus:to-surface-2',
      'focus:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    /**
     * content: 菜单内容
     * 🎨 同 Dropdown - bg-surface-2 用于悬浮层
     */
    content: [
      // Layout
      'z-50 min-w-[12rem] overflow-hidden',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color - 悬浮层颜色
      'bg-surface-2 p-1',
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
     * item: 菜单项
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
      // Hover - 轻微凸起 + 背景渐变
      'hover:bg-gradient-to-br hover:from-surface-1 hover:to-surface-2',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:-translate-y-px',
      // Active - 内凹
      'active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      'active:translate-y-0',
      // Focus
      'focus:bg-gradient-to-br focus:from-surface-1 focus:to-surface-2',
      'focus:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    /**
     * label: 标签
     * 🎨 柔和的次要文字
     */
    label: [
      'px-3 py-2',
      'text-xs font-medium',
      'text-muted-foreground',
    ],

    /**
     * separator: 分隔线
     * 🎨 内凹线条效果
     */
    separator: [
      '-mx-1 my-1 h-px',
      // 新拟物主义分隔线 - 内凹效果
      'bg-gradient-to-r from-transparent via-shadow-dark to-transparent',
      'shadow-[0_1px_0_var(--shadow-light)]',
    ],

    /**
     * shortcut: 快捷键
     * 🎨 柔和的提示文字
     */
    shortcut: [
      'ml-auto text-xs',
      'tracking-widest',
      'text-subtle-foreground',
    ],

    /**
     * checkboxItem: 复选框菜单项
     * 🎨 与普通菜单项相同的交互效果
     */
    checkboxItem: [
      // Layout
      'relative flex cursor-pointer select-none items-center gap-2',
      'px-3 py-2 pl-8',
      // Shape - 圆角
      'rounded-[12px]',
      // Typography
      'text-sm',
      'outline-none',
      // Transition - 柔和过渡
      'transition-all duration-200 ease-in-out',
      // Hover - 轻微凸起 + 背景渐变
      'hover:bg-gradient-to-br hover:from-surface-1 hover:to-surface-2',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:-translate-y-px',
      // Active - 内凹
      'active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      'active:translate-y-0',
      // Focus
      'focus:bg-gradient-to-br focus:from-surface-1 focus:to-surface-2',
      'focus:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    /**
     * radioItem: 单选菜单项
     * 🎨 与复选菜单项相同的样式
     */
    radioItem: [
      // Layout
      'relative flex cursor-pointer select-none items-center gap-2',
      'px-3 py-2 pl-8',
      // Shape - 圆角
      'rounded-[12px]',
      // Typography
      'text-sm',
      'outline-none',
      // Transition - 柔和过渡
      'transition-all duration-200 ease-in-out',
      // Hover - 轻微凸起 + 背景渐变
      'hover:bg-gradient-to-br hover:from-surface-1 hover:to-surface-2',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:-translate-y-px',
      // Active - 内凹
      'active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
      'active:translate-y-0',
      // Focus
      'focus:bg-gradient-to-br focus:from-surface-1 focus:to-surface-2',
      'focus:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    /**
     * indicator: 选中指示器
     * 🎨 左侧指示器位置
     */
    indicator: [
      'absolute left-2 flex h-4 w-4 items-center justify-center',
    ],

    /**
     * subTrigger: 子菜单触发器
     * 🎨 带有右箭头的菜单项
     */
    subTrigger: [
      // Layout
      'flex cursor-pointer select-none items-center gap-2',
      'px-3 py-2',
      // Shape - 圆角
      'rounded-[12px]',
      // Typography
      'text-sm',
      'outline-none',
      // Transition - 柔和过渡
      'transition-all duration-200 ease-in-out',
      // Hover - 轻微凸起 + 背景渐变
      'hover:bg-gradient-to-br hover:from-surface-1 hover:to-surface-2',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:-translate-y-px',
      // State
      'data-[state=open]:bg-gradient-to-br data-[state=open]:from-surface-1 data-[state=open]:to-surface-2',
      'data-[state=open]:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    /**
     * subContent: 子菜单内容
     * 🎨 与主菜单内容相同的样式
     */
    subContent: [
      // Layout
      'z-50 min-w-[8rem] overflow-hidden',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color - 悬浮层颜色
      'bg-surface-2 p-1',
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
