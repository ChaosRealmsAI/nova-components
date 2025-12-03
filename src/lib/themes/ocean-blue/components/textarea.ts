// ADR-008: 纯数据配置，无组件依赖

export const textareaConfig = {
  slots: {
    base: [
      'bg-surface-1 border-border text-foreground',
      'rounded-lg shadow-sm',
      'focus-visible:ring-primary/50',
    ],
  },
};
