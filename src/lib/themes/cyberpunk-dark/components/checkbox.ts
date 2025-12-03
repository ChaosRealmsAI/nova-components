// ADR-008: 纯数据配置，无组件依赖

export const checkboxConfig = {
  slots: {
    base: [
      'rounded-none border-primary',
      'data-[state=checked]:bg-primary data-[state=checked]:text-background',
      'shadow-[0_0_5px_var(--primary)]',
    ],
    indicator: 'text-background',
  },
};
