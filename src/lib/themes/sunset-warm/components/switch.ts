// ADR-008: 纯数据配置，无组件依赖

export const switchConfig = {
  slots: {
    base: [
      'rounded-full',
      'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-accent',
    ],
    thumb: [
      'shadow-sm',
    ],
  },
};
