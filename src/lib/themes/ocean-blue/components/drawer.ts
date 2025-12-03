// ADR-008: 纯数据配置，无组件依赖
export const drawerConfig = {
  slots: {
    overlay: 'bg-primary/10 backdrop-blur-sm',
    content: [
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-xl shadow-primary/10',
    ],
    header: '',
    title: 'font-semibold',
    description: '',
    footer: '',
    handle: 'bg-primary/30',
  },
  variants: {
    direction: {
      bottom: {
        content: 'rounded-t-2xl',
      },
      top: {
        content: 'rounded-b-2xl',
      },
      left: {
        content: '',
      },
      right: {
        content: '',
      },
    },
  },
};
