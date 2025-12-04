// ADR-008: 纯数据配置，无组件依赖

export const collapsibleConfig = {
  slots: {
    base: [],
    trigger: [
      'font-mono',
      'uppercase',
      'tracking-wider',
      'text-primary',
      'hover:text-primary/80',
    ],
    content: [
      'border-l-2',
      'border-primary',
      'pl-4',
      'ml-2',
    ],
  },
  variants: {
    variant: {
      default: {},
      bordered: {
        base: ['border-2', 'border-primary', 'rounded-none', 'bg-background/80'],
        trigger: ['border-b', 'border-primary/30'],
      },
      ghost: {
        trigger: ['hover:bg-primary/10'],
      },
    },
  },
};
