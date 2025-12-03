// ADR-008: 纯数据配置，无组件依赖
export const tableConfig = {
  slots: {
    container: '',
    table: 'font-mono',
    header: 'border-primary/30',
    body: '',
    footer: 'bg-surface-1 border-primary/30',
    row: [
      'border-primary/20',
      'hover:bg-primary/10',
      'data-[state=selected]:bg-primary/20',
    ],
    head: 'text-primary uppercase tracking-wider text-xs',
    cell: '',
    caption: 'font-mono text-primary/70',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
