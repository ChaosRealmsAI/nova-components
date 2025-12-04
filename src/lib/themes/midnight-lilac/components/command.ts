/**
 * Command 组件样式模板
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
export const commandConfig = {
  slots: {
    root: [
      'flex h-full w-full flex-col overflow-hidden',
      'rounded-[var(--radius)]',
      'bg-surface-1 text-popover-foreground',
    ],

    inputWrapper: 'flex items-center border-b border-surface-2 px-3',

    input: 'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',

    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',

    empty: 'py-6 text-center text-sm',

    group: 'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',

    separator: '-mx-1 h-px bg-surface-2',

    item: [
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'aria-selected:bg-primary aria-selected:text-primary-foreground', // Lilac selection
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',
  },

  variants: {
    variant: {
      default: {},
    },
  },
};