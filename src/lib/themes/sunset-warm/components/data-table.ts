import { type DataTableSlots } from '@/components/nova-ui/blocks/data-table';

export const dataTableConfig: {
  slots: Partial<Record<DataTableSlots, string | string[]>>;
} = {
  slots: {
    root: '',
    header: '',
    filterInput: 'border-orange-200 focus-visible:ring-orange-200',
    columnToggle: 'border-orange-200 hover:bg-orange-50 text-orange-600',
    tableContainer: 'rounded-xl border border-orange-100 shadow-sm',
    footer: '',
    paginationInfo: 'text-stone-500',
    paginationButtons: '',
  },
};
