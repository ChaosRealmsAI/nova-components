// ADR-008: 纯数据配置，无组件依赖
export const paginationConfig = {
  slots: {
    root: '',
    content: '',
    item: '',
    link: [
      'rounded-xl',
      'hover:bg-primary/10 hover:text-primary',
      'data-[active=true]:bg-gradient-to-r data-[active=true]:from-primary data-[active=true]:to-primary/80',
      'data-[active=true]:text-primary-foreground',
      'data-[active=true]:shadow-md data-[active=true]:shadow-primary/20',
      'transition-all duration-200',
    ],
    ellipsis: 'text-primary/30',
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
