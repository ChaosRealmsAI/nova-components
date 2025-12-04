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
      default: {},

      /**
       * outline: 轮廓切换组
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
  },
};
