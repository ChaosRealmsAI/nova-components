/**
 * Badge 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式标签/印章效果
 * 类似报纸上的分类标签或书籍标签
 */
export const badgeConfig = {
  slots: {
    base: [
      'inline-flex items-center justify-center',
      // 锐利边角
      'rounded-[1px]',
      // 粗边框
      'border-2',
      // 小尺寸、紧凑
      'px-2 py-0.5',
      // 字体：大写、粗体、间距
      'text-xs font-bold uppercase tracking-wider',
      'font-serif',
      // 过渡
      'transition-colors duration-200',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'bg-primary',
          'text-primary-foreground',
          'border-[#5C4033]',
          'shadow-[1px_1px_0_0_rgba(44,24,16,0.2)]',
        ],
      },

      secondary: {
        base: [
          'bg-surface-2',
          'text-foreground',
          'border-border-muted',
          'shadow-[1px_1px_0_0_rgba(44,24,16,0.1)]',
        ],
      },

      destructive: {
        base: [
          'bg-destructive',
          'text-destructive-foreground',
          'border-[#7F1D1D]',
          'shadow-[1px_1px_0_0_rgba(44,24,16,0.2)]',
        ],
      },

      outline: {
        base: [
          'bg-transparent',
          'text-foreground',
          'border-border',
        ],
      },

      success: {
        base: [
          'bg-success',
          'text-success-foreground',
          'border-[#1B5E20]',
          'shadow-[1px_1px_0_0_rgba(44,24,16,0.2)]',
        ],
      },

      warning: {
        base: [
          'bg-warning',
          'text-warning-foreground',
          'border-[#BF360C]',
          'shadow-[1px_1px_0_0_rgba(44,24,16,0.2)]',
        ],
      },
    },
  },
};
