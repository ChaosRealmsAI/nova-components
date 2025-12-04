/**
 * Button 组件样式模板
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
export const buttonConfig = {
  slots: {
    base: [
      'font-serif font-bold uppercase tracking-wider',
      'rounded-[var(--radius)]',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-[var(--opacity-disabled)]',
      'active:translate-y-[1px]', // 点击下沉感
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'hover:bg-primary/90',
          'shadow-[2px_2px_0px_var(--foreground)]', // 实心投影
          'hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]', // Hover 压平
          'border-2 border-primary',
        ],
      },

      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
          'hover:bg-destructive/90',
          'shadow-[2px_2px_0px_var(--destructive)]',
          'hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
          'border-2 border-destructive',
        ],
      },

      outline: {
        base: [
          'bg-transparent text-foreground',
          'border-2 border-primary',
          'shadow-[2px_2px_0px_var(--foreground)]',
          'hover:bg-primary hover:text-primary-foreground',
          'hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
        ],
      },

      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
          'border-2 border-transparent', // 占位
          'hover:bg-secondary/80',
          'shadow-sm',
        ],
      },

      ghost: {
        base: [
          'hover:bg-surface-2 hover:text-foreground',
          'border-2 border-transparent',
        ],
      },

      link: {
        base: [
          'text-primary underline-offset-4 hover:underline',
          'p-0 h-auto',
        ],
      },
    },
  },
};
