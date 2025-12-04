// ADR-008: 纯数据配置，无组件依赖

export const checkboxConfig = {
  slots: {
    base: [
      'rounded-md border-primary/50',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=checked]:border-primary',
      'shadow-sm',
    ],
    // Ocean Blue: 清新的白色对勾，与海洋蓝背景形成对比
    indicator: 'text-primary-foreground',
  },
};
