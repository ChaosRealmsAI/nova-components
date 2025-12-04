export const drawerConfig = {
  slots: {
    /**
     * overlay: 遮罩层
     */
    overlay: [],

    /**
     * content: 抽屉内容
     */
    content: [],

    /**
     * header: 头部区域
     */
    header: [],

    /**
     * title: 标题
     */
    title: [],

    /**
     * description: 描述
     */
    description: [],

    /**
     * footer: 底部区域
     */
    footer: [],

    /**
     * handle: 拖拽手柄
     */
    handle: [],
  },
  variants: {
    /**
     * direction: 抽屉方向
     */
    direction: {
      /**
       * bottom: 从底部滑出
       */
      bottom: {
        content: [],
      },

      /**
       * top: 从顶部滑出
       */
      top: {
        content: [],
      },

      /**
       * left: 从左侧滑出
       */
      left: {
        content: [],
      },

      /**
       * right: 从右侧滑出
       */
      right: {
        content: [],
      },
    },
  },
  defaultVariants: {
    direction: 'bottom',
  },
};
