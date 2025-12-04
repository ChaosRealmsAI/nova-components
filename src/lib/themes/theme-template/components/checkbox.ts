export const checkboxConfig = {
  slots: {
    /**
     * base: 复选框基础样式
     */
    base: [],

    /**
     * indicator: 选中指示器
     */
    indicator: [],

    /**
     * icon: 选中图标
     */
    icon: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
        indicator: [],
        icon: [],
      },

      /**
       * destructive: 危险样式
       */
      destructive: {
        base: [],
        indicator: [],
        icon: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        icon: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
        icon: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
        icon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
