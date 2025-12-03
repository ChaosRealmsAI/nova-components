// ADR-008: 纯数据配置，无组件依赖

export const switchConfig = {
  slots: {
    base: [
      'rounded-none',
      'border-primary',
      'data-[state=checked]:bg-primary',
      'data-[state=unchecked]:bg-surface-2',
      '[clip-path:polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]',
    ],
    thumb: [
      'rounded-none',
      'bg-background',
      'data-[state=checked]:shadow-[0_0_10px_var(--primary)]',
    ],
  },
};
