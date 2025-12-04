export const dialogConfig = {
  slots: {
    /**
     * overlay: 遮罩层
     */
    overlay: [],

    /**
     * content: 对话框内容
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
     * close: 关闭按钮
     */
    close: [],
  },
  variants: {
    size: {
      /**
       * sm: 小尺寸
       */
      sm: {
        content: [],
      },

      /**
       * default: 默认尺寸
       */
      default: {
        content: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        content: [],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        content: [],
      },

      /**
       * full: 全屏尺寸
       */
      full: {
        content: [],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
