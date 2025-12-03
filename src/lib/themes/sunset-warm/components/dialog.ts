// ADR-008: 纯数据配置，无组件依赖
export const dialogConfig = {
  slots: {
    overlay: 'bg-black/60',
    content: [
      'rounded-2xl',
      'border-primary/30',
      'shadow-lg shadow-primary/20',
    ],
    header: '',
    title: 'text-foreground',
    description: 'text-muted-foreground',
    footer: '',
    close: 'text-muted-foreground hover:text-primary',
  },
};
