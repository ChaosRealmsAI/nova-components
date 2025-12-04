/**
 * Carousel 组件样式模板
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
export const carouselConfig = {
  slots: {
    root: 'relative',

    content: 'flex',

    item: 'min-w-0 shrink-0 grow-0 basis-full',

    previous: [
      'absolute h-8 w-8 rounded-full',
      'bg-surface-2/80 backdrop-blur-sm',
      'border border-surface-3',
      'hover:bg-surface-2 hover:text-primary',
      'disabled:opacity-50',
    ],

    next: [
      'absolute h-8 w-8 rounded-full',
      'bg-surface-2/80 backdrop-blur-sm',
      'border border-surface-3',
      'hover:bg-surface-2 hover:text-primary',
      'disabled:opacity-50',
    ],
  },
};