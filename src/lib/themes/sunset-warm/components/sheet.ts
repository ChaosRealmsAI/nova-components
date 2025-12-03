// ADR-008: 纯数据配置，无组件依赖
export const sheetConfig = {
  slots: {
    overlay: 'bg-background/60 backdrop-blur-md',
    content: [
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-2xl shadow-primary/10',
    ],
    close: 'hover:text-primary hover:scale-110 transition-all duration-300',
    header: '',
    footer: '',
    title: 'font-bold',
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
