export const selectConfig = {
  slots: {
    /**
     * trigger: 触发按钮
     */
    trigger: [],

    /**
     * content: 下拉内容
     */
    content: [],

    /**
     * viewport: 视口
     */
    viewport: [],

    /**
     * item: 选项项
     */
    item: [],

    /**
     * label: 分组标签
     */
    label: [],

    /**
     * separator: 分隔线
     */
    separator: [],

    /**
     * indicator: 选中指示器
     */
    indicator: [],

    /**
     * scrollButton: 滚动按钮
     */
    scrollButton: [],

    /**
     * icon: 下拉图标
     */
    icon: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认选择器
       */
      default: {
        trigger: [],
        content: [],
        viewport: [],
        item: [],
        label: [],
        separator: [],
        indicator: [],
        scrollButton: [],
        icon: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        trigger: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        trigger: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
