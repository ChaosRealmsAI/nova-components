/**
 * Card 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 古老的明信片/书页效果
 * 泛黄的纸张质感、粗边框、内凹阴影
 */
export const cardConfig = {
  slots: {
    base: [
      // 羊皮纸背景
      'bg-surface-1',
      // 极小圆角
      'rounded-[2px]',
      // 粗边框，报纸风格
      'border-2 border-border',
      // Letterpress 阴影效果
      'shadow-[inset_0_1px_3px_rgba(44,24,16,0.1),3px_3px_0_0_rgba(44,24,16,0.15)]',
      // 文字颜色
      'text-foreground',
    ],

    header: [
      'flex flex-col space-y-1.5 p-6',
      // 底部边框分隔
      'border-b-2 border-border-muted',
    ],

    title: [
      'text-xl font-bold leading-none tracking-tight',
      // 衬线字体
      'font-serif',
      'text-foreground',
    ],

    description: [
      'text-sm text-muted-foreground',
      'font-serif italic',
    ],

    content: 'p-6 pt-4',

    footer: [
      'flex items-center p-6 pt-0',
    ],
  },

  variants: {
    variant: {
      default: {},

      elevated: {
        base: [
          'bg-surface-1',
          // 更明显的阴影
          'shadow-[inset_0_1px_2px_rgba(44,24,16,0.08),4px_4px_0_0_rgba(44,24,16,0.2)]',
        ],
      },

      outline: {
        base: [
          'bg-transparent',
          'border-2 border-border',
          'shadow-[2px_2px_0_0_rgba(44,24,16,0.1)]',
        ],
      },

      ghost: {
        base: [
          'bg-transparent',
          'border-dashed border-border-muted',
          'shadow-none',
          'hover:bg-surface-1/50',
          'hover:border-solid',
          'transition-all duration-200',
        ],
      },
    },
  },
};
