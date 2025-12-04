export const toggleConfig = {
  slots: {
    /**
     * base: 切换按钮基础样式
     */
    base: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
      },

      /**
       * outline: 轮廓样式
       */
      outline: {
        base: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
