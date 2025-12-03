// ADR-008: 纯数据配置，无组件依赖
export const hoverCardConfig = {
  slots: {
    root: '',
    trigger: '',
    content: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-lg shadow-primary/10',
    ],
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
