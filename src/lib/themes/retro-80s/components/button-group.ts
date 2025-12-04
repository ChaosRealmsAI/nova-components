export const buttonGroupConfig = {
  slots: {
    /**
     * root: 按钮组根容器
     */
    root: [],
  },

  variants: {
    variant: {
      /**
       * default: 默认按钮组
       */
      default: {},

      /**
       * outline: 轮廓按钮组
       */
      outline: {},
    },

    size: {
      /**
       * default: 默认尺寸
       */
      default: {},

      /**
       * sm: 小尺寸
       */
      sm: {},

      /**
       * lg: 大尺寸
       */
      lg: {},
    },

    /**
     * attached: 按钮连接样式
     */
    attached: {
      /**
       * true: 连接状态
       */
      true: {},

      /**
       * false: 分离状态
       */
      false: {},
    },
  },
};
