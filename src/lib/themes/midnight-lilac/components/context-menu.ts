/**
 * ContextMenu 组件样式模板
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
export const contextMenuConfig = {
  slots: {
    content: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-[var(--radius)]',
      'border border-surface-2',
      'bg-surface-1 p-1 text-popover-foreground',
      'shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
      'animate-in fade-in-80 zoom-in-95',
    ],

    item: [
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'focus:bg-primary focus:text-primary-foreground', // Lilac focus
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    label: 'px-2 py-1.5 text-sm font-semibold text-foreground',

    separator: '-mx-1 my-1 h-px bg-surface-2',

    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',

    checkboxItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'focus:bg-primary focus:text-primary-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    radioItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'focus:bg-primary focus:text-primary-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    indicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',

    subTrigger: [
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'focus:bg-primary focus:text-primary-foreground',
      'data-[state=open]:bg-primary data-[state=open]:text-primary-foreground',
    ],

    subContent: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-[var(--radius)]',
      'border border-surface-2',
      'bg-surface-1 p-1 text-popover-foreground',
      'shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
      'animate-in fade-in-80 zoom-in-95',
    ],

    trigger: '',
  },

  variants: {
    variant: {
      default: {},
    },
  },
};