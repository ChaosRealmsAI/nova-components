/**
 * ContextMenu 组件样式
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ 核心：Slot 级别的主题定制，不是简单换色
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * 你拥有的能力（必须充分发挥）：
 *
 * │ 维度   │ 你可以做什么                                                    │
 * │────────│─────────────────────────────────────────────────────────────────│
 * │ 形状   │ 圆角大小、切角、不规则形状、clip-path 任意裁剪                    │
 * │ 字体   │ 字族、大小写、字重、字距、行高                                   │
 * │ 动效   │ hover 变化、active 反馈、过渡时长、动画曲线                      │
 * │ 阴影   │ 无阴影、柔和、硬边、发光、内凹、多层                             │
 * │ 边框   │ 粗细、样式、颜色、发光、渐变                                     │
 * │ 背景   │ 纯色、渐变、半透明、模糊、图案                                   │
 *
 *

 * 🎨 颜色语义：
 *    - 面板：bg-surface-2
 *    - 菜单项 hover：bg-accent
 *    - 分割线：bg-border
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * 开发原则
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * 1. 设计语言驱动
 *    先读 DESIGN.md，理解主题的设计故事和设计语言
 *    每个样式决策都要问：这符合设计语言吗？
 *
 * 2. 差异化检验
 *    与默认主题对比，必须有明显视觉差异
 *    如果只是换了颜色，说明没有发挥 Slot 能力
 *
 * 3. 可读性底线
 *    文字与背景对比度 ≥ 4.5:1
 *    眯眼测试：看不清就是对比度不够
 *
 * 4. 状态清晰
 *    hover/active/focus/disabled 必须有明显视觉反馈
 *
 * 5. Token 规范
 *    颜色用 Token 类名：bg-primary, text-foreground
 *    阴影用 var()：shadow-[var(--shadow-md)]
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */
/**
 * ContextMenu Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Context Menu Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (4px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const contextMenuConfig = {
  slots: {
    content: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-none border-2 border-black',
      'bg-white p-1',
      'text-popover-foreground',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    item: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-none px-2 py-1.5 text-sm',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:translate-x-[1px] active:translate-y-[1px]',
    ],

    label: [
      'px-2 py-1.5 text-sm font-bold uppercase tracking-wide',
      'text-muted-foreground',
    ],

    separator: [
      '-mx-1 my-1 h-[2px] bg-black',
    ],

    shortcut: [
      'ml-auto text-xs tracking-wider',
      'text-muted-foreground',
      'font-mono',
    ],

    checkboxItem: [
      'relative flex cursor-default select-none items-center',
      'py-1.5 pl-8 pr-2 text-sm',
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:translate-x-[1px] active:translate-y-[1px]',
    ],

    radioItem: [
      'relative flex cursor-default select-none items-center',
      'py-1.5 pl-8 pr-2 text-sm',
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:translate-x-[1px] active:translate-y-[1px]',
    ],

    indicator: [
      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    subTrigger: [
      'flex cursor-default select-none items-center',
      'px-2 py-1.5 text-sm',
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[state=open]:bg-accent',
    ],

    subContent: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-none border-2 border-black',
      'bg-white p-1',
      'text-popover-foreground',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    trigger: [
      '',
    ],
  },

  variants: {
    variant: {
      default: {},
    },
  },
};
