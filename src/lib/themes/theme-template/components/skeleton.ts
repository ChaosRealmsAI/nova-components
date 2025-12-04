export const skeletonConfig = {
  slots: {
    /**
     * base: 骨架屏基础样式
     */
    base: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认骨架
       */
      default: {
        base: [],
      },

      /**
       * circular: 圆形骨架
       */
      circular: {
        base: [],
      },

      /**
       * text: 文本骨架
       */
      text: {
        base: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
