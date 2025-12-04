export const tabsConfig = {
  slots: {
    /**
     * root: 标签页根容器
     */
    root: [],

    /**
     * list: 标签列表
     */
    list: [],

    /**
     * trigger: 标签触发器
     */
    trigger: [],

    /**
     * content: 标签内容
     */
    content: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [],
        list: [],
        trigger: [],
        content: [],
      },

      /**
       * underline: 下划线样式
       */
      underline: {
        root: [],
        list: [],
        trigger: [],
        content: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
