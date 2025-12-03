// ADR-008: 纯数据配置，无组件依赖

export const spinnerConfig = {
  slots: {
    base: [
      'text-primary',
      'drop-shadow-[0_0_8px_var(--primary)]',
    ],
  },
  variants: {
    variant: {
      default: { base: 'text-primary drop-shadow-[0_0_8px_var(--primary)]' },
      secondary: { base: 'text-secondary drop-shadow-[0_0_8px_var(--secondary)]' },
      muted: { base: 'text-muted-foreground' },
    },
  },
};
