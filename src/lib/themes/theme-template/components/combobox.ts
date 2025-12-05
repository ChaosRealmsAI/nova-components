export const comboboxConfig = {
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
     * command: 命令面板
     */
    command: [],

    /**
     * inputWrapper: 输入框容器
     */
    inputWrapper: [],

    /**
     * input: 搜索输入框
     */
    input: [],

    /**
     * list: 选项列表
     */
    list: [],

    /**
     * empty: 空状态
     */
    empty: [],

    /**
     * group: 选项分组
     */
    group: [],

    /**
     * item: 选项项
     */
    item: [],

    /**
     * searchIcon: 搜索图标
     */
    searchIcon: [],

    /**
     * icon: 选项图标
     */
    icon: [],

    /**
     * separator: 分隔线
     */
    separator: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认组合框
       */
      default: {
        trigger: [],
        content: [],
        command: [],
        inputWrapper: [],
        input: [],
        list: [],
        empty: [],
        group: [],
        item: [],
        searchIcon: [],
        icon: [],
        separator: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
