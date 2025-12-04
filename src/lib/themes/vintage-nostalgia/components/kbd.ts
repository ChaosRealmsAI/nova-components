/**
 * Kbd 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 打字机按键风格
 * 机械键盘凸起效果
 */
export const kbdConfig = {
  slots: {
    base: [
      'inline-flex items-center justify-center',
      // 打字机键帽尺寸
      'h-5 min-w-[1.25rem] px-1.5',
      // 锐利边角
      'rounded-[2px]',
      // 背景
      'bg-surface-1',
      // 粗边框
      'border-2 border-border',
      // 凸起效果
      'shadow-[inset_0_-2px_0_0_rgba(44,24,16,0.2),2px_2px_0_0_rgba(44,24,16,0.25)]',
      // 字体：等宽、小尺寸
      'font-mono text-xs font-bold uppercase',
      'text-foreground',
      // 轻微间距
      'tracking-wider',
    ],
  },
};
