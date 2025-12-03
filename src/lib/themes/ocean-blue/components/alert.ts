// ADR-008: 纯数据配置，无组件依赖
export const alertConfig = {
  slots: {
    base: [
      'rounded-lg',
      'border-primary/20',
      'bg-primary/5',
      'shadow-sm',
    ],
    icon: '',
    title: 'font-medium',
    description: '',
  },
  variants: {
    variant: {
      default: {
        base: 'hover:shadow-md transition-shadow duration-300',
      },
      destructive: {
        base: [
          'border-destructive/20',
          'bg-destructive/5',
        ],
      },
    },
  },
};
