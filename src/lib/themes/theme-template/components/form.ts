export const formConfig = {
  slots: {
    /**
     * root: 表单根容器
     */
    root: [],

    /**
     * item: 表单项
     */
    item: [],

    /**
     * label: 字段标签
     */
    label: [],

    /**
     * control: 控件容器
     */
    control: [],

    /**
     * description: 字段描述
     */
    description: [],

    /**
     * message: 错误信息
     */
    message: [],
  },

  variants: {
    variant: {
      /**
       * default: 默认表单
       */
      default: {},

      /**
       * inline: 行内表单
       */
      inline: {},
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
