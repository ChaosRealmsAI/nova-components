export const buttonConfig = {
  slots: {
    /**
     * base: 按钮基础样式
     */
    base: [],
  },
  variants: {
    variant: {
      /**
       * default: 主要按钮
       */
      default: {
        base: [],
      },

      /**
       * destructive: 危险按钮
       */
      destructive: {
        base: [],
      },

      /**
       * outline: 轮廓按钮
       */
      outline: {
        base: [],
      },

      /**
       * secondary: 次要按钮
       */
      secondary: {
        base: [],
      },

      /**
       * ghost: 幽灵按钮
       */
      ghost: {
        base: [],
      },

      /**
       * link: 链接按钮
       */
      link: {
        base: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
      },

      /**
       * icon: 图标尺寸
       */
      icon: {
        base: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
