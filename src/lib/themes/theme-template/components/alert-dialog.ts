export const alertDialogConfig = {
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
  },
  variants: {
    variant: {
      /**
       * default: 默认对话框
       */
      default: {
        overlay: [],
        content: [],
        header: [],
        title: [],
        description: [],
        footer: [],
      },

      /**
       * destructive: 危险对话框
       */
      destructive: {
        overlay: [],
        content: [],
        header: [],
        title: [],
        description: [],
        footer: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
