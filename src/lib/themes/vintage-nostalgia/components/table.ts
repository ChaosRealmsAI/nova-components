/**
 * Table 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const tableConfig = {
  slots: {
    container: '',
    table: '',
    header: 'border-b-2 border-border',
    body: '[&_tr:last-child]:border-0',
    footer: 'border-t-2 border-border bg-surface-1 font-medium',
    row: [
      'border-b-2 border-border',
      'transition-colors duration-150',
      'hover:bg-surface-1',
      'data-[state=selected]:bg-primary-muted',
    ],
    head: [
      'h-12 px-4 text-left align-middle',
      'font-serif font-bold uppercase tracking-wide text-foreground',
      '[&:has([role=checkbox])]:pr-0',
    ],
    cell: [
      'p-4 align-middle',
      '[&:has([role=checkbox])]:pr-0',
    ],
    caption: 'mt-4 font-serif text-sm text-muted-foreground',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
