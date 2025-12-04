/**
 * Command 组件样式
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
 *    - 背景：bg-surface-1
 *    - 输入框：bg-transparent
 *    - 选中项：bg-accent
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
 * Command Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Command Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (4px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const commandConfig = {
  slots: {
    root: [
      'flex h-full w-full flex-col overflow-hidden',
      'rounded-none border-2 border-black',
      'bg-white',
      'text-popover-foreground',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    ],

    inputWrapper: [
      'flex items-center border-b-2 border-black px-3',
      'h-12',
    ],

    input: [
      'flex h-12 w-full rounded-none bg-transparent py-3',
      'text-sm outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],

    list: [
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
    ],

    empty: [
      'py-6 text-center text-sm',
      'text-muted-foreground',
      'font-bold uppercase tracking-wide',
    ],

    group: [
      'overflow-hidden p-1 text-foreground',
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5',
      '[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold',
      '[&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide',
      '[&_[cmdk-group-heading]]:text-muted-foreground',
    ],

    separator: [
      '-mx-1 h-[2px] bg-black',
    ],

    item: [
      'relative flex cursor-default select-none items-center',
      'rounded-none px-2 py-1.5',
      'text-sm font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      '[&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
      '[&_svg:not([class*="text-"])]:text-muted-foreground',
      'active:translate-x-[1px] active:translate-y-[1px]',
    ],

    shortcut: [
      'ml-auto text-xs tracking-wider',
      'text-muted-foreground',
      'font-mono',
    ],
  },

  variants: {
    variant: {
      default: {},
    },
  },
};
