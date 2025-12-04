export const radioGroupConfig = {
  slots: {
    /**
     * base: 单选组容器基础样式
     */
    base: [],
  },
};

export const radioGroupItemConfig = {
  slots: {
    /**
     * base: 单选项基础样式
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
