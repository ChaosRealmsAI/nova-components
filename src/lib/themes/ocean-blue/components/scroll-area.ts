// ADR-008: 纯数据配置，无组件依赖

export const scrollAreaConfig = {
  slots: {
    base: 'rounded-lg',
    viewport: 'rounded-lg',
  },
};

export const scrollBarConfig = {
  slots: {
    base: '',
    thumb: 'bg-primary/50 rounded-full',
  },
};
