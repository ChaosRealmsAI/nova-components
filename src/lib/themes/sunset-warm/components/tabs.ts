// ADR-008: 纯数据配置，无组件依赖

export const tabsConfig = {
  slots: {
    root: '',
    list: 'bg-surface-1 rounded-xl shadow-md',
    trigger: [
      'rounded-lg',
      'data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-secondary/20',
      'data-[state=active]:text-primary',
    ],
    content: '',
  },
};
