export const collapsibleConfig = {
  slots: {
    /**
     * base: 容器样式
     */
    base: [],

    /**
     * trigger: 触发器按钮样式
     */
    trigger: [],

    /**
     * content: 内容区域样式
     */
    content: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
        trigger: [],
        content: [],
      },

      /**
       * bordered: 边框样式
       */
      bordered: {
        base: [],
        trigger: [],
        content: [],
      },

      /**
       * ghost: 幽灵样式
       */
      ghost: {
        base: [],
        trigger: [],
        content: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
