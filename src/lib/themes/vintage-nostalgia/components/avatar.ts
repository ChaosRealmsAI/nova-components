/**
 * Avatar 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老照片相框效果
 * 泛黄照片质感、粗边框
 */
export const avatarConfig = {
  slots: {
    base: [
      'relative flex shrink-0 overflow-hidden',
      // 方形边角，复古照片风格
      'rounded-[2px]',
      // 粗边框
      'border-2 border-border',
      // 阴影效果
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.2)]',
    ],
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [
      'flex h-full w-full items-center justify-center',
      // 锐利边角
      'rounded-[2px]',
      // 羊皮纸背景
      'bg-surface-2',
      // 衬线字体
      'font-serif font-bold uppercase tracking-wide',
      'text-foreground',
    ],
  },
};
