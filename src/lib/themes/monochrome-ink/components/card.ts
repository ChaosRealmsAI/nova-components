/**
 * Card 组件样式模板
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
export const cardConfig = {
  slots: {
    base: [
      'rounded-[var(--radius)]',
      'bg-surface-1 text-foreground',
      'border-2 border-foreground', // 粗边框
      'shadow-[4px_4px_0px_var(--foreground)]', // 实心阴影
    ],
    header: ['flex flex-col space-y-1.5 p-6'],
    title: ['font-serif text-2xl font-bold leading-none tracking-tight'],
    description: ['text-sm text-muted-foreground'],
    action: ['ml-auto'],
    content: ['p-6 pt-0'],
    footer: ['flex items-center p-6 pt-0'],
  },

  variants: {
    variant: {
      default: {},

      outline: {
        base: [
          'bg-transparent',
          'shadow-none',
          'border-2 border-foreground',
        ],
      },

      ghost: {
        base: [
          'border-none shadow-none bg-transparent',
        ],
      },

      elevated: {
        base: [
          'shadow-[8px_8px_0px_var(--foreground)]',
        ],
      },
    },
  },
};
