/**
 * Tabs 组件样式模板
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
export const tabsConfig = {
  slots: {
    root: '',

    list: [
      'inline-flex h-10 items-center justify-center',
      'rounded-[var(--radius)]',
      'bg-surface-2 p-1 text-muted-foreground', // Surface-2 for background
    ],

    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap',
      'rounded-sm px-3 py-1.5',
      'text-sm font-medium',
      'ring-offset-background',
      'transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-surface-1', // Active background
      'data-[state=active]:text-foreground',
      'data-[state=active]:shadow-sm',
      'data-[state=active]:text-primary', // Lilac active text
    ],

    content: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  },
};