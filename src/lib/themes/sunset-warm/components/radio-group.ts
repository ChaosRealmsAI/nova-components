// ADR-008: 纯数据配置，无组件依赖

export const radioGroupConfig = {
  slots: {
    base: 'gap-3',
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [
      'rounded-full',
      'border border-primary',
      'bg-surface-1',
      'hover:bg-surface-2',
    ],
    indicator: 'text-primary',
    icon: 'fill-current w-2.5 h-2.5',
  },
};
