export const datePickerConfig = {
  slots: {
    /**
     * trigger: 触发按钮
     */
    trigger: [],

    /**
     * content: 弹出内容
     */
    content: [],

    /**
     * icon: 日历图标
     */
    icon: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认日期选择器
       */
      default: {
        trigger: [],
        content: [],
        icon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
