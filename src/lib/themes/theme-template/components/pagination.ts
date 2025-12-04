export const paginationConfig = {
  slots: {
    /**
     * root: 分页根容器
     */
    root: [],

    /**
     * content: 分页内容
     */
    content: [],

    /**
     * item: 分页项
     */
    item: [],

    /**
     * link: 分页链接
     */
    link: [],

    /**
     * ellipsis: 省略号
     */
    ellipsis: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认分页
       */
      default: {
        root: [],
        content: [],
        item: [],
        link: [],
        ellipsis: [],
      },

      /**
       * outline: 轮廓分页
       */
      outline: {
        root: [],
        content: [],
        item: [],
        link: [],
        ellipsis: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        link: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        link: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        link: [],
      },

      /**
       * icon: 图标尺寸
       */
      icon: {
        link: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
