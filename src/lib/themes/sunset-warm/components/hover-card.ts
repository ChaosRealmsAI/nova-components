// ADR-008: 纯数据配置，无组件依赖
export const hoverCardConfig = {
  slots: {
    root: '',
    trigger: '',
    content: [
      'rounded-2xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-xl shadow-primary/10',
    ],
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
