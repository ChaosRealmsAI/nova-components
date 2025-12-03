// ADR-008: 纯数据配置，无组件依赖

export const kbdConfig = {
  slots: {
    base: [
      'rounded-none font-mono uppercase',
      'bg-surface-2 text-primary border-primary',
      'shadow-[0_0_6px_var(--primary)]',
      '[clip-path:polygon(3px_0,100%_0,100%_calc(100%-3px),calc(100%-3px)_100%,0_100%,0_3px)]',
    ],
  },
};
