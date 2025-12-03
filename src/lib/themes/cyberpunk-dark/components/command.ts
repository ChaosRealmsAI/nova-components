// ADR-008: 纯数据配置，无组件依赖
export const commandConfig = {
  slots: {
    root: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'shadow-[0_0_20px_var(--primary)]',
    ],
    inputWrapper: 'border-primary/30',
    input: 'font-mono placeholder:text-primary/50',
    list: '',
    empty: 'font-mono text-primary/70',
    group: 'font-mono',
    separator: 'bg-primary/30',
    item: [
      'rounded-none font-mono',
      'data-[selected=true]:bg-primary/20',
      'data-[selected=true]:text-primary',
    ],
    shortcut: 'font-mono text-primary/70',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
