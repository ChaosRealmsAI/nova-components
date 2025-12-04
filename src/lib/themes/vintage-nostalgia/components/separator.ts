/**
 * Separator 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式报纸分隔线
 * 粗实线效果
 */
export const separatorConfig = {
  slots: {
    base: [
      'shrink-0',
      // 深色分隔线
      'bg-border',
      // 阴影效果
      'shadow-[0_1px_0_0_rgba(255,253,208,0.3)]',
    ],
  },

  variants: {
    orientation: {
      horizontal: {
        base: 'h-[2px] w-full',
      },

      vertical: {
        base: 'w-[2px] min-h-[60px] self-stretch',
      },
    },
  },
};
