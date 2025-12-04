/**
 * DataTable 组件样式 - Cyberpunk (Complex Grid)
 */
export const dataTableConfig = {
  slots: {
    root: [
      'w-full',
    ],
    
    header: [
      'flex items-center justify-between py-4',
    ],
    
    filterInput: [
      'max-w-sm font-mono text-xs',
    ],
    
    columnToggle: [
      'ml-auto',
    ],
    
    tableContainer: [
      'rounded-none border border-primary/30',
    ],
    
    pagination: [
      'flex items-center justify-end space-x-2 py-4',
    ],
    
    paginationButton: [
      'font-mono uppercase',
    ],

    footer: [ // Added missing slot
        'bg-muted/50 font-medium',
    ],

    paginationInfo: [ // Added missing slot
        'flex-1 text-sm text-muted-foreground',
    ],

    paginationButtons: [ // Added missing slot
        'space-x-2',
    ]
  },
};
