/**
 * AlertDialog 组件样式模板
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
export const alertDialogConfig = {
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 backdrop-blur-sm',

    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]',
      'gap-4 border p-6 shadow-lg duration-200',
      'bg-surface-1', // Dark card background
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
      'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
      'rounded-[var(--radius)]',
      'shadow-[0_0_30px_rgba(0,0,0,0.5)]', // Deep shadow
    ],

    header: 'flex flex-col space-y-2 text-center sm:text-left',

    title: 'text-lg font-semibold',

    description: 'text-sm text-muted-foreground',

    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  },

  variants: {
    variant: {
      default: {},

      destructive: {
        content: [
          'border-destructive/50',
          'shadow-[0_0_30px_var(--destructive-muted)]', // Red glow for danger
        ],
      },
    },
  },
};