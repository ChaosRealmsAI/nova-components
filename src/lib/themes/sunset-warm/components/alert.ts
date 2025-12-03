// ADR-008: 纯数据配置，无组件依赖
export const alertConfig = {
  slots: {
    base: [
      'rounded-2xl',
      'border-primary/30',
      'bg-gradient-to-r from-primary/5 to-transparent',
      'shadow-sm shadow-primary/5',
    ],
    icon: '',
    title: 'font-semibold',
    description: '',
  },
  variants: {
    variant: {
      default: {
        base: 'hover:shadow-md hover:shadow-primary/10 transition-shadow duration-300',
      },
      destructive: {
        base: [
          'border-destructive/30',
          'bg-gradient-to-r from-destructive/5 to-transparent',
          'shadow-destructive/5',
        ],
      },
    },
  },
};
