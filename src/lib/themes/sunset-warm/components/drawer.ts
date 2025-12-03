// ADR-008: 纯数据配置，无组件依赖
export const drawerConfig = {
  slots: {
    overlay: 'bg-background/60 backdrop-blur-md',
    content: [
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-2xl shadow-primary/10',
    ],
    header: '',
    title: 'font-bold',
    description: '',
    footer: '',
    handle: 'bg-primary/40 rounded-full',
  },
  variants: {
    direction: {
      bottom: {
        content: 'rounded-t-3xl',
      },
      top: {
        content: 'rounded-b-3xl',
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
