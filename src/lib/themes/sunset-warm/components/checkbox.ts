// ADR-008: 纯数据配置，无组件依赖

export const checkboxConfig = {
  slots: {
    base: [
      'rounded-full border-primary',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'shadow-sm hover:shadow-md transition-all',
    ],
    // Sunset Warm: 温暖的对勾颜色，与日落橙背景形成和谐对比
    indicator: 'text-primary-foreground',
  },
};
