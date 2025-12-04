/**
 * Drawer 组件样式模板
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
export const drawerConfig = {
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/80',

    content: [
      'fixed z-50 flex flex-col',
      'border border-surface-2',
      'bg-surface-1', // Dark background
    ],

    header: 'grid gap-1.5 p-4 text-center sm:text-left',

    title: 'text-lg font-semibold leading-none tracking-tight',

    description: 'text-sm text-muted-foreground',

    footer: 'mt-auto flex flex-col gap-2 p-4',

    handle: 'mx-auto mt-4 h-2 w-[100px] rounded-full bg-surface-3',
  },

  variants: {
    direction: {
      bottom: {
        content: 'inset-x-0 bottom-0 mt-24 h-auto border-t rounded-t-[var(--radius)]',
      },
      top: {
        content: 'inset-x-0 top-0 mb-24 h-auto border-b rounded-b-[var(--radius)]',
      },
      left: {
        content: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
      },
      right: {
        content: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
      },
    },
  },
};