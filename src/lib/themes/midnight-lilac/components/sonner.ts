/**
 * Sonner 组件样式模板
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
 *
 * 注意：Sonner 的样式需要使用 !important 覆盖默认样式
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sonnerConfig = {
  slots: {
    root: [
      '!bg-surface-1 !border !border-surface-2 !text-foreground',
      '!shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
      '!rounded-[var(--radius)]',
      'group toast',
    ],

    title: '!font-bold',

    description: '!text-muted-foreground',

    actionButton: [
      '!bg-primary !text-primary-foreground',
      '!rounded-[var(--radius)]',
    ],

    cancelButton: [
      '!bg-surface-2 !text-foreground',
      '!rounded-[var(--radius)]',
    ],

    closeButton: '!bg-surface-2 !text-foreground !border-surface-3',

    success: '!border-success/50 !text-success',

    error: '!border-destructive/50 !text-destructive',

    warning: '!border-warning/50 !text-warning',

    info: '!border-info/50 !text-info',

    icon: '!mr-2',
  },
};