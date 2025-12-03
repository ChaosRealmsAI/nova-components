// ADR-008: 纯数据配置，无组件依赖

export const progressConfig = {
  slots: {
    base: [
      'rounded-none',
      'bg-zinc-800',
      'border border-primary/30',
    ],
    indicator: [
      'bg-primary',
      'shadow-[0_0_10px_var(--primary)]',
      'bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_75%,transparent_75%,transparent)]',
      'bg-[length:10px_10px]',
    ],
  },
};
