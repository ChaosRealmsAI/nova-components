// ADR-008: 纯数据配置，无组件依赖
export const selectConfig = {
  slots: {
    trigger: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      'font-mono',
      '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]',
      'focus-visible:border-primary focus-visible:shadow-[0_0_10px_var(--primary)]',
    ],
    content: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]',
      'shadow-[0_0_15px_var(--primary)]',
    ],
    viewport: '',
    item: [
      'rounded-none font-mono',
      'focus:bg-primary/20 focus:text-primary',
    ],
    label: 'font-mono text-primary/70',
    separator: 'bg-primary/30',
    indicator: '',
    scrollButton: '',
    icon: '',
  },
  variants: {
    variant: {
      default: {},
    },
    size: {
      default: {},
      sm: {},
    },
  },
};
