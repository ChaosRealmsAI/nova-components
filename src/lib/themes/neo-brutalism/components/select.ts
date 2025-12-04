/**
 * Select 组件样式
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
 *    - 触发器背景：bg-surface-1（不要用 primary！）
 *    - 下拉面板：bg-surface-2
 *    - 选中项：bg-primary/10 或 bg-accent
 *    - 边框：border-border
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
 * Select Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Select Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (4px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const selectConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-none border-2 border-black',
      'bg-white px-3 py-2 text-sm',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-all duration-75',
    ],

    content: [
      'relative z-50 min-w-[8rem] overflow-hidden',
      'rounded-none border-2 border-black',
      'bg-white p-1',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'text-popover-foreground',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    viewport: [
      'p-1',
    ],

    item: [
      'relative flex w-full cursor-default select-none items-center',
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

    indicator: [
      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    scrollButton: [
      'flex items-center justify-center',
      'h-9 rounded-none',
      'border-2 border-black',
      'bg-white',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    ],

    icon: [
      'h-4 w-4 opacity-50',
    ],
  },

  variants: {
    variant: {
      default: {},
    },

    size: {
      default: {},
      sm: {
        trigger: 'h-8 px-2 text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      },
    },
  },
};
