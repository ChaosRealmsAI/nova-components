/**
 * DataTable 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const dataTableConfig = {
  slots: {
    root: 'w-full space-y-4',
    header: '',
    filterInput: '',
    columnToggle: '',
    tableContainer: 'relative w-full overflow-auto',
    footer: 'flex items-center justify-between px-2',
    paginationInfo: 'font-serif text-sm text-muted-foreground',
    paginationButtons: [
      'flex items-center space-x-2',
      '[&_button]:inline-flex [&_button]:h-8 [&_button]:items-center [&_button]:justify-center',
      '[&_button]:rounded-[2px]',
      '[&_button]:border-2 [&_button]:border-border',
      '[&_button]:bg-transparent [&_button]:px-3',
      '[&_button]:font-serif [&_button]:text-sm',
      '[&_button]:transition-colors [&_button]:duration-150',
      '[&_button]:hover:bg-surface-1',
      '[&_button]:disabled:pointer-events-none [&_button]:disabled:opacity-50',
    ],
  },
};
