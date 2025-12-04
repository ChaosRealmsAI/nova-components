export const tableConfig = {
  slots: {
    container: 'relative w-full overflow-auto border-2 border-black rounded-md',
    table: 'w-full caption-bottom text-sm',
    header: '[&_tr]:border-b-2 [&_tr]:border-black',
    body: '[&_tr:last-child]:border-0',
    row: 'border-b-2 border-black transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
    head: 'h-12 px-4 text-left align-middle font-bold text-muted-foreground [&:has([role=checkbox])]:pr-0',
    cell: 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
    caption: 'mt-4 text-sm text-muted-foreground',
    footer: 'border-t-2 border-black bg-muted/50 font-medium [&>tr]:last:border-b-0',
  },
};
