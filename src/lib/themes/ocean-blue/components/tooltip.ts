// ADR-008: 纯数据配置，无组件依赖

export const tooltipConfig = {
  slots: {
    content: [
      'bg-foreground text-background rounded-lg shadow-lg',
    ],
    arrow: 'bg-foreground fill-foreground',
  },
};
