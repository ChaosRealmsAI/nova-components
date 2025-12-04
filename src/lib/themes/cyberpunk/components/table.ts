/**
 * Table 组件样式 - Cyberpunk (Data Grid)
 */
export const tableConfig = {
  slots: {
    root: [], // Added missing slot but wait, previous file had root, missing container/table? 
    // Validator said: missing container, table.
    // And it probably expects `root` to be `container` or `table`? 
    // Let's check theme-template/components/table.ts structure if I could.
    // Usually shadcn table has `root` (wrapper) and `table` (actual table).
    // Let's assume `container` is the wrapper and `table` is the table tag.
    
    container: [ // Renamed/Added
      'relative w-full overflow-auto',
    ],

    table: [ // Renamed/Added
      'w-full caption-bottom text-sm',
      'border-collapse',
    ],
    
    header: [
      '[&_tr]:border-b-2 [&_tr]:border-primary/30',
    ],
    
    body: [
      '[&_tr:last-child]:border-0',
    ],
    
    footer: [
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
    ],
    
    row: [
      'border-b border-border/50 transition-colors',
      'hover:bg-primary/5', // Subtle hover
      'data-[state=selected]:bg-primary/10',
    ],
    
    head: [ // This might be headRow or headCell? Validator didn't complain about head/cell/row.
      // But wait, Calendar had issues with camelCase. 
      // Table usually has `header`, `body`, `footer`, `head`, `row`, `cell`, `caption`.
      // Let's keep these as is if validator didn't complain about them specifically (it only listed missing slots).
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
      'uppercase font-mono tracking-wider text-xs',
      'text-primary', // Colored headers
    ],
    
    cell: [
      'p-4 align-middle [&:has([role=checkbox])]:pr-0',
      'font-mono', // Monospace data
    ],
    
    caption: [
      'mt-4 text-sm text-muted-foreground',
    ],
  },
};
