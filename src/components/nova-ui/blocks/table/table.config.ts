/**
 * Table Base Config
 * Block 级别配置，依赖 Atoms: checkbox
 */
export const tableBaseConfig = {
  slots: {
    container: 'relative w-full overflow-x-auto',
    table: 'w-full caption-bottom text-sm',
    header: '[&_tr]:border-b',
    body: '[&_tr:last-child]:border-0',
    footer: 'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
    row: 'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
    head: 'h-10 px-2 text-left align-middle font-medium text-foreground whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    cell: 'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    caption: 'mt-4 text-sm text-muted-foreground',
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
