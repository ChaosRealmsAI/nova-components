// ADR-008: 纯数据配置，无组件依赖
export const alertDialogConfig = {
  slots: {
    overlay: 'bg-primary/10 backdrop-blur-sm',
    content: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-xl shadow-primary/10',
    ],
    header: '',
    title: 'font-semibold',
    description: '',
    footer: '',
  },
  variants: {
    variant: {
      default: {},
      destructive: {
        content: [
          'border-destructive/20',
          'shadow-destructive/10',
        ],
      },
    },
  },
};
