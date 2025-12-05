export const toggleGroupConfig = {
  slots: {
    /**
     * root: 切换组根容器
     */
    root: [],

    /**
     * item: 切换项
     */
    item: [],
  },

  variants: {
    variant: {
      /**
       * default: 默认切换组
       */
      default: {
        root: [],
        item: [],
      },

      /**
       * outline: 轮廓切换组
       */
      outline: {
        root: [],
        item: [],
      },
    },

    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        root: [],
        item: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        root: [],
        item: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        root: [],
        item: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
