// ADR-008: 纯数据配置，无组件依赖

export const avatarConfig = {
  slots: {
    base: [
      'rounded-full',
      'ring-2 ring-primary/30',
      'shadow-md',
    ],
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [
      'rounded-full bg-gradient-to-br from-primary/20 to-secondary/20',
      'text-primary font-medium',
    ],
  },
};
