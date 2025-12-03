// ADR-008: 纯数据配置，无组件依赖

export const toggleConfig = {
  slots: {
    base: [
      'rounded-none font-mono uppercase',
      '[clip-path:polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]',
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-[0_0_10px_var(--primary)]',
    ],
  },
};
