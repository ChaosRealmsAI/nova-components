// ADR-008: 纯数据配置，无组件依赖

export const progressConfig = {
  slots: {
    base: [
      'rounded-full',
      'bg-surface-2',
    ],
    indicator: [
      'bg-primary',
      'shadow-[0_0_8px_var(--primary)]',
    ],
  },
};
