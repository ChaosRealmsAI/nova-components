// ADR-008: 纯数据配置，无组件依赖
export const formConfig = {
  slots: {
    root: '',
    item: '',
    label: 'font-medium',
    control: '',
    description: 'text-primary/60',
    message: '',
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
