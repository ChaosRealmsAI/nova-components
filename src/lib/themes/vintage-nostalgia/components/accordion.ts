/**
 * Accordion 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式折叠页效果
 * 古书手风琴质感
 */
export const accordionConfig = {
  slots: {
    root: '',

    item: [
      'border-b-2 border-border',
    ],

    header: 'flex',

    trigger: [
      'flex flex-1 items-center justify-between py-4',
      // 字体
      'font-serif font-medium text-foreground',
      'transition-all duration-200',
      // Hover
      'hover:text-primary',
      // 禁用
      '[&[data-state=open]]:text-primary',
    ],

    chevron: 'h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-180',

    content: [
      'overflow-hidden',
      'text-sm font-serif',
      'transition-all duration-300',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    ],

    contentInner: 'pb-4 pt-0',
  },
};
