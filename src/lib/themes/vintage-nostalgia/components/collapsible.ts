/**
 * Collapsible 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 古书折叠页效果
 * 手风琴书页质感
 */
export const collapsibleConfig = {
  slots: {
    base: [],

    trigger: [
      'flex items-center justify-between',
      'w-full p-3',
      // 衬线字体
      'font-serif font-medium',
      'text-foreground',
      // 过渡
      'transition-colors duration-200',
      // Hover
      'hover:bg-surface-1',
    ],

    content: [
      'overflow-hidden',
      'transition-all duration-300',
      'data-[state=closed]:animate-collapsible-up',
      'data-[state=open]:animate-collapsible-down',
    ],
  },

  variants: {
    variant: {
      default: {},

      bordered: {
        base: [
          'border-2 border-border',
          'rounded-[2px]',
          'shadow-[2px_2px_0_0_rgba(44,24,16,0.15)]',
        ],
        trigger: [
          'border-b-2 border-border',
          'data-[state=open]:bg-surface-1',
        ],
      },

      ghost: {
        trigger: [
          'hover:bg-surface-1/50',
        ],
      },
    },
  },
};
