/**
 * NavigationMenu 组件样式模板
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
export const navigationMenuConfig = {
  slots: {
    root: 'relative z-10 flex max-w-max flex-1 items-center justify-center',

    list: 'group flex flex-1 list-none items-center justify-center space-x-1',

    item: '',

    trigger: [
      'group inline-flex h-10 w-max items-center justify-center',
      'rounded-md', // Standard rounded
      'bg-surface-1',
      'px-4 py-2 text-sm font-medium transition-colors',
      'hover:bg-surface-2 hover:text-primary',
      'focus:bg-surface-2 focus:text-primary focus:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[active]:bg-surface-2/50 data-[state=open]:bg-surface-2/50',
    ],

    content: [
      'left-0 top-0 w-full',
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
      'md:absolute md:w-auto',
    ],

    viewport: [
      'origin-top-center relative mt-1.5',
      'h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden',
      'rounded-[var(--radius)]',
      'border border-surface-2',
      'bg-surface-1 text-popover-foreground',
      'shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
      'md:w-[var(--radix-navigation-menu-viewport-width)]',
    ],

    link: [
      'group inline-flex h-10 w-max items-center justify-center',
      'rounded-md',
      'bg-transparent',
      'px-4 py-2 text-sm font-medium transition-colors',
      'hover:bg-surface-2 hover:text-primary',
      'focus:bg-surface-2 focus:text-primary focus:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[active]:bg-surface-2/50 data-[state=open]:bg-surface-2/50',
    ],

    contentList: 'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',

    listItem: [
      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-2 hover:text-accent-foreground focus:bg-surface-2 focus:text-accent-foreground',
    ],

    listItemTitle: 'text-sm font-medium leading-none',

    listItemDescription: 'line-clamp-2 text-sm leading-snug text-muted-foreground',

    indicator: [
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
      'data-[state=visible]:animate-in data-[state=hidden]:animate-out',
      'data-[state=hidden]:fade-out data-[state=visible]:fade-in',
    ],

    indicatorArrow: 'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-surface-2 shadow-md',

    chevron: 'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
  },
};