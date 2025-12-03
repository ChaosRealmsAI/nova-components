// ADR-008: 纯数据配置，无组件依赖
export const tableConfig = {
  slots: {
    container: '',
    table: '',
    header: 'border-primary/10',
    body: '',
    footer: 'bg-primary/5 border-primary/10',
    row: [
      'border-primary/10',
      'hover:bg-primary/5',
      'data-[state=selected]:bg-primary/10',
      'transition-colors duration-150',
    ],
    head: 'text-primary/80 font-medium',
    cell: '',
    caption: 'text-primary/60',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
