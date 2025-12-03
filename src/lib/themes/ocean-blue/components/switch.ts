// ADR-008: 纯数据配置，无组件依赖

export const switchConfig = {
  slots: {
    base: [
      'rounded-full',
      'shadow-inner',
      'data-[state=checked]:bg-primary',
    ],
    thumb: [
      'shadow-md',
    ],
  },
};
