/**
 * InputOtp 组件样式模板
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
export const inputOtpConfig = {
  slots: {
    root: 'disabled:cursor-not-allowed',

    container: 'flex items-center gap-2 has-[:disabled]:opacity-50',

    group: 'flex items-center',

    slot: [
      'relative flex h-10 w-10 items-center justify-center',
      'border-y border-r border-input bg-surface-1', // Surface-1
      'text-sm transition-all',
      'first:rounded-l-[var(--radius)] first:border-l',
      'last:rounded-r-[var(--radius)]',
      'z-10',
    ],

    separator: 'text-muted-foreground',

    caret: 'pointer-events-none absolute inset-0 flex items-center justify-center animate-caret-blink',

    caretLine: 'h-4 w-px bg-primary', // Lilac caret
  },

  variants: {
    variant: {
      default: {
        slot: 'focus:relative focus:z-20 focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background',
      },
    },
  },
};