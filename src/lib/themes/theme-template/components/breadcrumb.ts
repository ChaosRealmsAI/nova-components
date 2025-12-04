export const breadcrumbConfig = {
  slots: {
    /**
     * root: 面包屑根容器
     */
    root: [],

    /**
     * list: 面包屑列表
     */
    list: [],

    /**
     * item: 面包屑项
     */
    item: [],

    /**
     * link: 面包屑链接
     */
    link: [],

    /**
     * page: 当前页面
     */
    page: [],

    /**
     * separator: 分隔符
     */
    separator: [],

    /**
     * ellipsis: 省略号
     */
    ellipsis: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认面包屑
       */
      default: {
        root: [],
        list: [],
        item: [],
        link: [],
        page: [],
        separator: [],
        ellipsis: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
