// ADR-008: 纯数据配置，无组件依赖
export const formConfig = {
  slots: {
    root: '',
    item: '',
    label: 'font-mono uppercase tracking-wider text-xs',
    control: '',
    description: 'font-mono text-primary/70',
    message: 'font-mono',
  },
  variants: {
    variant: {
      default: {},
      inline: {},
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};
