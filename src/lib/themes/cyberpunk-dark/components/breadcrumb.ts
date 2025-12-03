// ADR-008: 纯数据配置，无组件依赖
export const breadcrumbConfig = {
  slots: {
    root: '',
    list: 'font-mono text-xs uppercase tracking-wider',
    item: '',
    link: [
      'hover:text-primary',
      'hover:shadow-[0_0_8px_var(--primary)]',
      'transition-all duration-200',
    ],
    page: 'text-primary',
    separator: 'text-primary/50',
    ellipsis: '',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
