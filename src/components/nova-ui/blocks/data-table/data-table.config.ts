/**
 * DataTable Base Config
 * Block 级别配置
 * 依赖 Atoms: button, input, dropdown-menu, table
 */
export const dataTableBaseConfig = {
  slots: {
    root: 'w-full text-foreground',
    header: 'flex items-center py-4 justify-between gap-2',
    filterInput: 'max-w-sm',
    columnToggle: 'ml-auto',
    tableContainer: 'rounded-md border',
    footer: 'flex items-center justify-end space-x-2 py-4',
    paginationInfo: 'flex-1 text-sm text-muted-foreground',
    paginationButtons: 'space-x-2',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
