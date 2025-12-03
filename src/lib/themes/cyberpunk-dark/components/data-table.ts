import { type DataTableSlots } from '@/components/nova-ui/blocks/data-table';

export const dataTableConfig: {
  slots: Partial<Record<DataTableSlots, string | string[]>>;
} = {
  slots: {
    root: '',
    header: '',
    filterInput: 'border-primary/50 bg-background/50 focus-visible:ring-primary/50',
    columnToggle: 'border-primary/50 hover:bg-primary/10 hover:text-primary-foreground',
    tableContainer: 'rounded-md border border-primary/50',
    footer: '',
    paginationInfo: 'text-muted-foreground',
    paginationButtons: '',
  },
};
