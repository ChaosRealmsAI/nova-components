// ADR-008: 纯数据配置，无组件依赖

export const tooltipConfig = {
  slots: {
    content: [
      'bg-foreground text-background rounded-xl shadow-xl',
    ],
    arrow: 'bg-foreground fill-foreground',
  },
};
