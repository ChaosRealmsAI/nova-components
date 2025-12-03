// ADR-008: 纯数据配置，无组件依赖

export const avatarConfig = {
  slots: {
    base: [
      'rounded-full',
      'ring-2 ring-primary/40',
      'shadow-lg shadow-primary/20',
    ],
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [
      'rounded-full bg-gradient-to-br from-primary to-accent',
      'text-primary-foreground font-semibold',
    ],
  },
};
