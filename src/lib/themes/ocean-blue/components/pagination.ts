// ADR-008: 纯数据配置，无组件依赖
export const paginationConfig = {
  slots: {
    root: '',
    content: '',
    item: '',
    link: [
      'rounded-lg',
      'hover:bg-primary/10 hover:text-primary',
      'data-[active=true]:bg-primary data-[active=true]:text-primary-foreground',
      'transition-colors duration-150',
    ],
    ellipsis: 'text-primary/40',
  },
  variants: {
    variant: {
      default: {},
      outline: {
        link: 'border-primary/20 hover:border-primary/40',
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
