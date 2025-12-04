export const progressConfig = {
  slots: {
    /**
     * base: 进度条轨道基础样式
     */
    base: [],

    /**
     * indicator: 进度指示器
     */
    indicator: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
        indicator: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        indicator: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
        indicator: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
        indicator: [],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: [],
        indicator: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
