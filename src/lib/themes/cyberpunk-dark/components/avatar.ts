// ADR-008: 纯数据配置，无组件依赖

export const avatarConfig = {
  slots: {
    base: [
      'rounded-none',
      'border border-primary',
      'shadow-[0_0_8px_var(--primary)]',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
    ],
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [
      'rounded-none bg-surface-2 text-primary font-mono uppercase',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
    ],
  },
};
