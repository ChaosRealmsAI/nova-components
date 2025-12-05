export const menubarConfig = {
  slots: {
    /**
     * root: 菜单栏根容器
     */
    root: [],

    /**
     * trigger: 菜单触发按钮
     */
    trigger: [],

    /**
     * content: 菜单内容
     */
    content: [],

    /**
     * item: 菜单项
     */
    item: [],

    /**
     * label: 标签
     */
    label: [],

    /**
     * separator: 分隔线
     */
    separator: [],

    /**
     * shortcut: 快捷键
     */
    shortcut: [],

    /**
     * checkboxItem: 复选框菜单项
     */
    checkboxItem: [],

    /**
     * radioItem: 单选菜单项
     */
    radioItem: [],

    /**
     * indicator: 选中指示器
     */
    indicator: [],

    /**
     * subTrigger: 子菜单触发器
     */
    subTrigger: [],

    /**
     * subContent: 子菜单内容
     */
    subContent: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认菜单栏
       */
      default: {
        root: [],
        trigger: [],
        content: [],
        item: [],
        label: [],
        separator: [],
        shortcut: [],
        checkboxItem: [],
        radioItem: [],
        indicator: [],
        subTrigger: [],
        subContent: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
