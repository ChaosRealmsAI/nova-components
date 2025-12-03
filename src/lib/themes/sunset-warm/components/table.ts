// ADR-008: 纯数据配置，无组件依赖
export const tableConfig = {
  slots: {
    container: '',
    table: '',
    header: 'border-primary/10',
    body: '',
    footer: 'bg-gradient-to-r from-primary/5 to-transparent border-primary/10',
    row: [
      'border-primary/10',
      'hover:bg-primary/5',
      'data-[state=selected]:bg-primary/10',
      'transition-all duration-200',
    ],
    head: 'text-primary/70 font-semibold',
    cell: '',
    caption: 'text-primary/50',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
