// ADR-008: 纯数据配置，无组件依赖

export const sliderConfig = {
  slots: {
    // Sunset Warm: 温暖的滑块容器
    base: '',
    track: [
      'rounded-full',
      'bg-surface-2',
    ],
    range: [
      'bg-gradient-to-r from-primary to-accent',
    ],
    thumb: [
      'rounded-full',
      'border-primary',
      'bg-background',
      'shadow-md',
      'hover:scale-105 transition-transform',
    ],
  },
};
