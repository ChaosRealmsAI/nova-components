// ADR-008: 纯数据配置，无组件依赖
export const breadcrumbConfig = {
  slots: {
    root: '',
    list: '',
    item: '',
    link: [
      'hover:text-primary',
      'transition-all duration-300',
      'hover:translate-x-0.5',
    ],
    page: 'text-primary font-semibold',
    separator: 'text-primary/30',
    ellipsis: '',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
