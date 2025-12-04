export const tableConfig = {
  slots: {
    /**
     * container: 表格容器
     */
    container: [],

    /**
     * table: 表格元素
     */
    table: [],

    /**
     * header: 表头
     */
    header: [],

    /**
     * body: 表体
     */
    body: [],

    /**
     * footer: 表尾
     */
    footer: [],

    /**
     * row: 行
     */
    row: [],

    /**
     * head: 表头单元格
     */
    head: [],

    /**
     * cell: 单元格
     */
    cell: [],

    /**
     * caption: 表格说明
     */
    caption: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认表格
       */
      default: {
        container: [],
        table: [],
        header: [],
        body: [],
        footer: [],
        row: [],
        head: [],
        cell: [],
        caption: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
