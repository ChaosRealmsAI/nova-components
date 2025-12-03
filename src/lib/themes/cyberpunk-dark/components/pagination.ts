// ADR-008: 纯数据配置，无组件依赖
export const paginationConfig = {
  slots: {
    root: '',
    content: '',
    item: '',
    link: [
      'rounded-none font-mono',
      'border border-primary/30',
      'hover:border-primary hover:shadow-[0_0_8px_var(--primary)]',
      'data-[active=true]:bg-primary data-[active=true]:text-primary-foreground',
      'data-[active=true]:shadow-[0_0_10px_var(--primary)]',
    ],
    ellipsis: 'text-primary/50',
  },
  variants: {
    variant: {
      default: {},
      outline: {
        link: 'border-primary/50',
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
      icon: {},
    },
  },
};
