// ADR-008: 纯数据配置，无组件依赖
export const inputGroupConfig = {
  slots: {
    root: '',
    input: '',
    button: '',
    addon: [
      'rounded-xl',
      'border-primary/20',
      'bg-gradient-to-r from-primary/10 to-transparent',
      'text-primary/60',
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
