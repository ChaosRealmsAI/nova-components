// ADR-008: 纯数据配置，无组件依赖

export const progressConfig = {
  slots: {
    base: [
      'rounded-full',
      'bg-surface-2',
      'shadow-inner',
    ],
    indicator: [
      'bg-gradient-to-r from-primary to-secondary',
      'shadow-sm',
    ],
  },
};
