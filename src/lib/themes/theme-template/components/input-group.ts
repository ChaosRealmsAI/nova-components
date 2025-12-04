export const inputGroupConfig = {
  slots: {
    /**
     * root: 根容器
     */
    root: [],

    /**
     * input: 输入框
     */
    input: [],

    /**
     * button: 按钮
     */
    button: [],

    /**
     * addon: 附加元素
     */
    addon: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },

      /**
       * attached: 连接样式
       */
      attached: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
