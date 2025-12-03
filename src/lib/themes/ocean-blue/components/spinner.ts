// ADR-008: 纯数据配置，无组件依赖

export const spinnerConfig = {
  slots: {
    base: [
      'text-primary',
    ],
  },
  variants: {
    variant: {
      default: { base: 'text-primary' },
      secondary: { base: 'text-secondary' },
      muted: { base: 'text-muted-foreground' },
    },
  },
};
