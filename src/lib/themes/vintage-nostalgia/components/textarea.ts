/**
 * Textarea 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式便签纸效果
 * 类似打字机的多行输入区域
 */
export const textareaConfig = {
  slots: {
    base: [
      // 基础样式
      'flex min-h-[80px] w-full px-3 py-2',
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
      'focus-visible:outline-none',
      // 禁用状态
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-2',
    ],
  },
};
