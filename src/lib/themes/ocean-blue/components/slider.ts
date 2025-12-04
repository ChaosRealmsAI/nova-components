// ADR-008: 纯数据配置，无组件依赖

export const sliderConfig = {
  slots: {
    // Ocean Blue: 现代简洁的滑块容器
    base: '',
    track: [
      'rounded-full',
      'bg-surface-2',
      'shadow-inner',
    ],
    range: [
      'bg-primary',
    ],
    thumb: [
      'rounded-full',
      'border-2 border-background',
      'bg-primary',
      'shadow-md',
      'hover:scale-110 transition-transform',
    ],
  },
};
