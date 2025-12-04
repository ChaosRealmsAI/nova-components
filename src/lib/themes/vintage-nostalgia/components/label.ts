/**
 * Label 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式表单标签
 * 衬线字体、略微加粗
 */
export const labelConfig = {
  slots: {
    base: [
      // 字体样式
      'text-sm font-semibold leading-none',
      // 衬线字体
      'font-serif',
      // 颜色
      'text-foreground',
      // 禁用状态
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    ],
  },
};
