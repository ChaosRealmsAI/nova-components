// ADR-008: 纯数据配置，无组件依赖

export const tabsConfig = {
  slots: {
    root: '',
    list: 'bg-surface-1 rounded-lg shadow-sm',
    trigger: [
      'rounded-md',
      'data-[state=active]:bg-primary/10 data-[state=active]:text-primary',
      'data-[state=active]:shadow-sm',
    ],
    content: '',
  },
};
