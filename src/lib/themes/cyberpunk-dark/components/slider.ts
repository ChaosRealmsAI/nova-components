// ADR-008: 纯数据配置，无组件依赖

export const sliderConfig = {
  slots: {
    base: '',
    track: [
      'rounded-none',
      'bg-zinc-800',
      'border border-primary/30',
    ],
    range: [
      'bg-primary',
      'shadow-[0_0_10px_var(--primary)]',
    ],
    thumb: [
      'rounded-none',
      'border-2 border-primary',
      'bg-background',
      'shadow-[0_0_10px_var(--primary)]',
      'hover:scale-110 transition-transform',
    ],
  },
};
