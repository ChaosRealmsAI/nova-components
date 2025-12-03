// ADR-008: 纯数据配置，无组件依赖

export const radioGroupConfig = {
  slots: {
    base: 'gap-3',
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [
      'rounded-none',
      'border-primary',
      'bg-background',
      'shadow-[0_0_5px_var(--primary)]',
    ],
    indicator: 'text-primary',
    icon: 'fill-current w-2.5 h-2.5',
  },
};
