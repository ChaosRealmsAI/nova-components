export const sliderConfig = {
  slots: {
    /**
     * base: 滑块容器基础样式
     */
    base: [],

    /**
     * track: 滑块轨道
     */
    track: [],

    /**
     * range: 已选择范围
     */
    range: [],

    /**
     * thumb: 滑块手柄
     */
    thumb: [],
  },
  variants: {
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        track: [],
        range: [],
        thumb: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
        track: [],
        range: [],
        thumb: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
        track: [],
        range: [],
        thumb: [],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
