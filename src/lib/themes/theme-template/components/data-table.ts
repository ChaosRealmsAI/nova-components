export const dataTableConfig = {
  slots: {
    /**
     * root: 数据表格根容器
     */
    root: [],

    /**
     * header: 表格头部工具栏
     */
    header: [],

    /**
     * filterInput: 过滤输入框
     */
    filterInput: [],

    /**
     * columnToggle: 列切换按钮
     */
    columnToggle: [],

    /**
     * tableContainer: 表格容器
     */
    tableContainer: [],

    /**
     * footer: 表格底部
     */
    footer: [],

    /**
     * paginationInfo: 分页信息
     */
    paginationInfo: [],

    /**
     * paginationButtons: 分页按钮
     */
    paginationButtons: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认数据表格
       */
      default: {
        root: [],
        header: [],
        filterInput: [],
        columnToggle: [],
        tableContainer: [],
        footer: [],
        paginationInfo: [],
        paginationButtons: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
