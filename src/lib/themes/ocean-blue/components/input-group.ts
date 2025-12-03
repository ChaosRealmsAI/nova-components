// ADR-008: 纯数据配置，无组件依赖
export const inputGroupConfig = {
  slots: {
    root: '',
    input: '',
    button: '',
    addon: [
      'rounded-lg',
      'border-primary/20',
      'bg-primary/5',
      'text-primary/70',
    ],
  },
  variants: {
    variant: {
      default: {},
      attached: {
        addon: 'rounded-r-none',
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};
