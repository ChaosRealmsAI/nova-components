export const spinnerConfig = {
  slots: {
    /**
     * base: 加载指示器基础样式
     */
    base: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认加载器
       */
      default: {
        base: [],
      },

      /**
       * secondary: 次要加载器
       */
      secondary: {
        base: [],
      },

      /**
       * muted: 柔和加载器
       */
      muted: {
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

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
