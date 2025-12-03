// ADR-008: 纯数据配置，无组件依赖

export const toggleConfig = {
  slots: {
    base: [
      'rounded-xl',
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-md',
    ],
  },
};
