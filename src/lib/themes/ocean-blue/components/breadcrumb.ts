// ADR-008: 纯数据配置，无组件依赖
export const breadcrumbConfig = {
  slots: {
    root: '',
    list: '',
    item: '',
    link: [
      'hover:text-primary',
      'transition-colors duration-200',
    ],
    page: 'text-primary font-medium',
    separator: 'text-primary/40',
    ellipsis: '',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
