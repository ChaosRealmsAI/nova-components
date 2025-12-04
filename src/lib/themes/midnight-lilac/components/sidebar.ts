/**
 * Sidebar 组件样式模板
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
export const sidebarConfig = {
  slots: {
    root: [
      'flex h-screen w-64 flex-col',
      'border-r border-surface-2',
      'bg-surface-1', // Sidebar bg
      'transition-all',
    ],

    header: 'flex h-14 items-center border-b border-surface-2 px-4',

    content: 'flex-1 overflow-auto py-4',

    footer: 'border-t border-surface-2 p-4',

    group: 'space-y-2 px-2',

    groupLabel: 'px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1',

    menu: 'space-y-1',

    menuItem: '',

    menuButton: [
      'flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium transition-colors',
      'hover:bg-surface-2 hover:text-foreground',
      'aria-[current=page]:bg-surface-2 aria-[current=page]:text-primary',
      'aria-[current=page]:shadow-[inset_3px_0_0_var(--primary)]', // Left border indicator
    ],

    menuBadge: 'ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground',

    separator: 'mx-2 my-2 h-px bg-surface-2',

    trigger: 'fixed left-4 top-4 z-40 md:hidden',

    overlay: 'fixed inset-0 z-30 bg-black/80 backdrop-blur-sm transition-all data-[state=closed]:hidden data-[state=open]:animate-in data-[state=open]:fade-in-0',
  },
};