export const alertConfig = {
  slots: {
    /**
     * base: 警告框基础样式
     */
    base: [],

    /**
     * icon: 图标样式
     */
    icon: [],

    /**
     * title: 标题样式
     */
    title: [],

    /**
     * description: 描述样式
     */
    description: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认警告
       */
      default: {
        base: [],
        icon: [],
        title: [],
        description: [],
      },

      /**
       * destructive: 危险警告
       */
      destructive: {
        base: [],
        icon: [],
        title: [],
        description: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
