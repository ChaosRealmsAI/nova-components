/**
 * Input 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 打字机输入框效果
 * 内凹的纸张凹槽、粗边框
 */
export const inputConfig = {
  slots: {
    base: [
      // 基础样式
      'flex h-10 w-full px-3 py-2',
      // 打字机字体
      'font-mono text-sm',
      // 羊皮纸背景
      'bg-background',
      // 锐利边角
      'rounded-[2px]',
      // 粗边框
      'border-2 border-border',
      // 内凹效果
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.12)]',
      // 文字颜色
      'text-foreground',
      'placeholder:text-muted-foreground placeholder:italic',
      // 过渡
      'transition-all duration-200',
      // 焦点状态
      'focus:border-primary',
      'focus:shadow-[inset_0_2px_4px_rgba(44,24,16,0.15),0_0_0_2px_rgba(139,69,19,0.15)]',
      'focus:outline-none',
      // 禁用状态
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-2',
      // 文件输入特殊样式
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    ],
  },

  variants: {
    variant: {
      default: {},

      error: {
        base: [
          'border-destructive',
          'shadow-[inset_0_2px_4px_rgba(183,28,28,0.1)]',
          'focus:border-destructive',
          'focus:shadow-[inset_0_2px_4px_rgba(183,28,28,0.15),0_0_0_2px_rgba(183,28,28,0.15)]',
        ],
      },
    },
  },
};
