// ADR-008: 纯数据配置，无组件依赖

export const accordionConfig = {
  slots: {
    root: 'text-foreground',
    item: [
      'border-primary/30',
      'data-[state=open]:border-primary',
    ],
    header: '',
    trigger: [
      'font-mono uppercase tracking-wider text-xs text-foreground',
      'hover:text-primary hover:no-underline',
      'data-[state=open]:text-primary',
    ],
    chevron: 'text-primary',
    content: 'font-mono text-foreground',
    contentInner: '',
  },
};
