import { type DataTableSlots } from '@/components/nova-ui/blocks/data-table';

export const dataTableConfig: {
  slots: Partial<Record<DataTableSlots, string | string[]>>;
} = {
  slots: {
    root: '',
    header: '',
    filterInput: 'border-blue-200 focus-visible:ring-blue-200',
    columnToggle: 'border-blue-200 hover:bg-blue-50 text-blue-600',
    tableContainer: 'rounded-xl border border-blue-100 shadow-sm',
    footer: '',
    paginationInfo: 'text-slate-500',
    paginationButtons: '',
  },
};
