// ADR-008: 纯数据配置，无组件依赖
export const sheetConfig = {
  slots: {
    overlay: 'bg-primary/10 backdrop-blur-sm',
    content: [
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-xl shadow-primary/10',
    ],
    close: 'hover:text-primary transition-colors duration-200',
    header: '',
    footer: '',
    title: 'font-semibold',
    description: '',
  },
  variants: {
    side: {
      right: {},
      left: {},
      top: {},
      bottom: {},
    },
  },
};
