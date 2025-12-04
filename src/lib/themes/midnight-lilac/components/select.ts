/**
 * Select 组件样式模板
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * 开发原则：
 *
 * 1. Token 优先
 *    - 有 Token 的地方必须使用 Token（颜色、阴影、圆角、字体等）
 *    - 开发组件样式前，先完成 tokens.ts 的定义
 *    - 语法：颜色用类名(bg-primary)，阴影用 var()(shadow-[var(--shadow-md)])
 *
 * 2. 结构固定，样式灵活
 *    - slots 和 variants 的 key 必须保持一致（系统依赖）
 *    - value 完全自由，根据主题风格发挥创意
 *
 * 3. 风格统一
 *    - 同一主题内所有组件应保持一致的设计语言
 *    - 如：圆角风格、阴影风格、动画风格等
 *
 * 4. 只需满足用途约束
 *    - 每个 variant 有其用途约束（如 destructive 必须用 destructive Token）
 *    - 只要满足约束，实现方式完全自由
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const selectConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-[var(--radius)]',
      'border border-input bg-surface-1', // Dark bg
      'px-3 py-2 text-sm',
      'ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'hover:bg-surface-2', // Hover effect
    ],

    content: [
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
      'rounded-[var(--radius)]',
      'border border-surface-2',
      'bg-surface-1 text-popover-foreground',
      'shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'position-popper data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
    ],

    viewport: 'p-1',

    item: [
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'focus:bg-primary focus:text-primary-foreground', // Lilac focus
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',

    separator: '-mx-1 my-1 h-px bg-surface-2',

    indicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',

    scrollButton: 'flex cursor-default items-center justify-center py-1',

    icon: 'h-4 w-4 opacity-50',
  },

  variants: {
    variant: {
      default: {},
    },

    size: {
      default: {},
      sm: {},
    },
  },
};