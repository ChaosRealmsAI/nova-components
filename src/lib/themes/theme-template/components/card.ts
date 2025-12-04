export const cardConfig = {
  slots: {
    /**
     * base: 卡片容器
     */
    base: [],

    /**
     * header: 卡片头部
     */
    header: [],

    /**
     * title: 卡片标题
     */
    title: [],

    /**
     * description: 卡片描述
     */
    description: [],

    /**
     * action: 卡片操作区
     */
    action: [],

    /**
     * content: 卡片内容区
     */
    content: [],

    /**
     * footer: 卡片底部
     */
    footer: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认卡片
       */
      default: {
        base: [],
        header: [],
        title: [],
        description: [],
        action: [],
        content: [],
        footer: [],
      },

      /**
       * outline: 轮廓卡片
       */
      outline: {
        base: [],
      },

      /**
       * ghost: 幽灵卡片
       */
      ghost: {
        base: [],
      },

      /**
       * elevated: 悬浮卡片
       */
      elevated: {
        base: [],
      },
    },
    size: {
      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
        header: [],
        content: [],
        footer: [],
      },

      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        header: [],
        content: [],
        footer: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
        header: [],
        content: [],
        footer: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
