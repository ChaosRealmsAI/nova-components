// ADR-008: 纯数据配置，无组件依赖

export const accordionConfig = {
  slots: {
    root: 'text-foreground',
    item: [
      'border-border',
      'data-[state=open]:border-primary/50',
    ],
    header: '',
    trigger: [
      'text-foreground',
      'hover:text-primary hover:no-underline',
      'data-[state=open]:text-primary',
    ],
    chevron: 'text-muted-foreground data-[state=open]:text-primary',
    content: 'text-foreground',
    contentInner: '',
  },
};
