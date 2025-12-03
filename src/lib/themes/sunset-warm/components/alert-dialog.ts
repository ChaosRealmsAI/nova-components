// ADR-008: 纯数据配置，无组件依赖
export const alertDialogConfig = {
  slots: {
    overlay: 'bg-background/60 backdrop-blur-md',
    content: [
      'rounded-3xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-2xl shadow-primary/10',
    ],
    header: '',
    title: 'font-bold',
    description: '',
    footer: '',
  },
  variants: {
    variant: {
      default: {},
      destructive: {
        content: [
          'border-destructive/20',
          'bg-gradient-to-br from-background to-destructive/5',
          'shadow-destructive/10',
        ],
      },
    },
  },
};
