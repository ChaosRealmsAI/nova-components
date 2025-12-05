export const resizableConfig = {
  slots: {
    /**
     * panelGroup: 面板组
     */
    panelGroup: [],

    /**
     * panel: 面板
     */
    panel: [],

    /**
     * handle: 调整手柄
     */
    handle: [],

    /**
     * handleIcon: 手柄图标
     */
    handleIcon: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        panelGroup: [],
        panel: [],
        handle: [],
        handleIcon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
