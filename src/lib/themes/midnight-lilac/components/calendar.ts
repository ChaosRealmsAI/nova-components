/**
 * Calendar 组件样式模板
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
export const calendarConfig = {
  slots: {
    root: [
      'p-3',
      'rounded-[var(--radius)]',
      'bg-surface-1', // Card background
      'shadow-lg border border-surface-2',
    ],

    months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',

    month: 'space-y-4',

    caption: 'flex justify-center pt-1 relative items-center',

    captionLabel: 'text-sm font-medium',

    nav: 'space-x-1 flex items-center',

    navButton: [
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      'border border-input hover:bg-surface-2 hover:text-foreground', // Custom hover
      'rounded-md',
      'transition-all',
    ],

    navButtonPrevious: 'absolute left-1',

    navButtonNext: 'absolute right-1',

    table: 'w-full border-collapse space-y-1',

    headRow: 'flex',

    headCell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',

    row: 'flex w-full mt-2',

    cell: [
      'text-center text-sm p-0 relative',
      '[&:has([aria-selected])]:bg-surface-2', // Selection range background
      'first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md',
      'focus-within:relative focus-within:z-20',
    ],

    day: [
      'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
      'hover:bg-surface-2 hover:text-foreground',
      'rounded-md transition-all',
    ],

    daySelected: [
      'bg-primary text-primary-foreground',
      'hover:bg-primary hover:text-primary-foreground',
      'focus:bg-primary focus:text-primary-foreground',
      'shadow-[0_0_10px_var(--primary-muted)]', // Glow
    ],

    dayToday: 'bg-surface-2 text-foreground',

    dayOutside: 'text-muted-foreground opacity-50',

    dayDisabled: 'text-muted-foreground opacity-50',

    dayHidden: 'invisible',
  },
};