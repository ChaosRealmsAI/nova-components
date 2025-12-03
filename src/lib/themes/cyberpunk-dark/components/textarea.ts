// ADR-008: 纯数据配置，无组件依赖

export const textareaConfig = {
  slots: {
    base: [
      'bg-surface-1 border-border text-foreground',
      'rounded-none font-mono',
      'focus-visible:ring-primary',
      'placeholder:text-muted-foreground',
      '[clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]',
    ],
  },
};
