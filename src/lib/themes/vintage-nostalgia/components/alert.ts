/**
 * Alert 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式报纸警告公告效果
 * 加粗边框提示质感
 */
export const alertConfig = {
  slots: {
    base: [
      'relative w-full',
      // 锐利边角
      'rounded-[2px]',
      // 粗边框
      'border-2',
      // 内边距
      'p-4',
      // 字体
      'font-serif',
      // 阴影
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.15)]',
    ],

    icon: 'h-5 w-5',

    title: 'mb-1 font-serif font-bold uppercase tracking-wide leading-none',

    description: 'text-sm font-serif leading-relaxed [&_p]:leading-relaxed',
  },

  variants: {
    variant: {
      default: {
        base: 'border-border bg-surface-1 text-foreground',
      },

      destructive: {
        base: [
          'border-destructive',
          'bg-error-muted',
          'text-destructive',
          '[&>svg]:text-destructive',
        ],
      },
    },
  },
};
