/**
 * Data Table Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Data Table"
 * - Enhanced table with filters and pagination
 * - Container with glow border
 * - Inherits Table style with additional features
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dataTableConfig = {
  slots: {
    /**
     * root: 数据表格根容器
     */
    root: [
      'space-y-4',
    ],

    /**
     * header: 表格头部工具栏
     * ─────────────────────────────────────────────────────────────────────
     * 工具栏区域
     */
    header: [
      'flex items-center justify-between',
      'px-1',
    ],

    /**
     * filterInput: 过滤输入框
     */
    filterInput: [
      'max-w-sm',
    ],

    /**
     * columnToggle: 列切换按钮
     */
    columnToggle: [
      'ml-auto',
    ],

    /**
     * tableContainer: 表格容器
     * ─────────────────────────────────────────────────────────────────────
     * 4px 小圆角 + 发光边框
     */
    tableContainer: [
      'rounded-[4px]',
      'border border-border',
      'bg-surface-1',
      'shadow-[inset_0_0_8px_color-mix(in_srgb,var(--border)_5%,transparent),0_0_4px_color-mix(in_srgb,var(--border)_20%,transparent)]',
    ],

    /**
     * footer: 表格底部
     * ─────────────────────────────────────────────────────────────────────
     * 分页和信息区域
     */
    footer: [
      'flex items-center justify-between',
      'px-2 py-2',
      'border-t border-border',
    ],

    /**
     * paginationInfo: 分页信息
     */
    paginationInfo: [
      'text-sm text-muted-foreground',
      'tracking-wide',
    ],

    /**
     * paginationButtons: 分页按钮
     */
    paginationButtons: [
      'flex items-center space-x-2',
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
