// ADR-008: 纯数据配置，无组件依赖

export const collapsibleConfig = {
  slots: {
    base: [],
    trigger: [
      'text-foreground',
      'hover:text-primary',
      'transition-colors',
    ],
    content: [
      'border-l',
      'border-primary/20',
      'pl-4',
      'ml-2',
    ],
  },
  variants: {
    variant: {
      default: {},
      bordered: {
        base: ['border', 'border-primary/15', 'rounded-2xl', 'bg-primary/5'],
      },
      ghost: {
        trigger: ['hover:bg-primary/10', 'rounded-xl'],
      },
    },
  },
};
