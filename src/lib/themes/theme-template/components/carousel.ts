export const carouselConfig = {
  slots: {
    /**
     * root: 轮播根容器
     */
    root: [],

    /**
     * content: 轮播内容区
     */
    content: [],

    /**
     * item: 轮播项
     */
    item: [],

    /**
     * previous: 上一个按钮
     */
    previous: [],

    /**
     * next: 下一个按钮
     */
    next: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认轮播
       */
      default: {
        root: [],
        content: [],
        item: [],
        previous: [],
        next: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
