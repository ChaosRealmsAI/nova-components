export const switchConfig = {
  slots: {
    /**
     * base: 开关轨道基础样式
     */
    base: [],

    /**
     * thumb: 开关滑块
     */
    thumb: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
        thumb: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        thumb: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
        thumb: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
        thumb: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
