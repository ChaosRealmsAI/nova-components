// ADR-008: 纯数据配置，无组件依赖

export const checkboxConfig = {
  slots: {
    base: [
      'rounded-md border-primary/50',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=checked]:border-primary',
      'shadow-sm',
    ],
  },
};
