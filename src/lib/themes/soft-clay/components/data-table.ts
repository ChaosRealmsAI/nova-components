/**
 * Data Table Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neumorphic Data Table" (新拟物数据表格)
 * - Inherits Table styling
 * - Header toolbar: Raised surface with controls
 * - Footer pagination: Raised buttons
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dataTableConfig = {
  slots: {
    /**
     * root: 数据表格根容器
     */
    root: [
      'w-full space-y-4',
    ],

    /**
     * header: 表格头部工具栏 - 凸起容器
     */
    header: [
      'flex items-center justify-between',
      'gap-4 px-6 py-4',
      // Shape - 圆角
      'rounded-[16px]',
      // Background
      'bg-surface-1',
      // Shadow - 轻微凸起
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
    ],

    /**
     * filterInput: 过滤输入框 - 继承 input 样式
     */
    filterInput: [
      'flex-1 max-w-sm',
    ],

    /**
     * columnToggle: 列切换按钮
     */
    columnToggle: [
      // 继承 button 样式
    ],

    /**
     * tableContainer: 表格容器 - 继承 table 的 container
     */
    tableContainer: [
      'rounded-[24px]',
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      'bg-surface-1',
      'overflow-hidden',
    ],

    /**
     * footer: 表格底部 - 凸起容器
     */
    footer: [
      'flex items-center justify-between',
      'gap-4 px-6 py-4',
      // Shape - 圆角
      'rounded-[16px]',
      // Background
      'bg-surface-1',
      // Shadow - 轻微凸起
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
    ],

    /**
     * paginationInfo: 分页信息
     */
    paginationInfo: [
      'text-sm text-muted-foreground',
    ],

    /**
     * paginationButtons: 分页按钮
     */
    paginationButtons: [
      'flex items-center gap-2',
    ],
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
