'use client';

/**
 * DataTable Block
 *
 * 数据表格组件，基于 @tanstack/react-table
 *
 * Architecture Notes:
 * - Block 组件，依赖: button, checkbox, input, dropdown-menu, table
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';
import { Checkbox } from '@/components/nova-ui/atmos/checkbox';
import { Input } from '@/components/nova-ui/atmos/input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/nova-ui/blocks/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/nova-ui/blocks/table';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const dataTableAtoms = [
  'button',
  'checkbox',
  'input',
  'dropdown-menu',
  'table',
] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const dataTableBase = tv({
  slots: {
    root: 'w-full',
    header: 'flex items-center py-4 justify-between gap-2',
    filterInput: 'max-w-sm',
    columnToggle: 'ml-auto',
    tableContainer: 'rounded-md border',
    footer: 'flex items-center justify-end space-x-2 py-4',
    paginationInfo: 'flex-1 text-sm',
    paginationButtons: 'space-x-2',
  },
});

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// Types
// ============================================================================

export type DataTableSlots = keyof ReturnType<typeof dataTableBase>;
export type DataTableClassNames = Partial<Record<DataTableSlots, string>>;

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  classNames?: DataTableClassNames;
  className?: string;
  translations?: {
    filterPlaceholder?: string;
    columnsLabel?: string;
    noResults?: string;
    previous?: string;
    next?: string;
    rowsSelectedTemplate?: string;
  };
}

// ============================================================================
// Demo Data
// ============================================================================

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

// Column factory function that accepts translations
type TranslateFunction = (key: string, fallback?: string) => string;

export function createColumns(t: TranslateFunction): ColumnDef<Payment>[] {
  return [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
          aria-label={t('dataTableSelectAll', 'Select all')}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
          aria-label={t('dataTableSelectRow', 'Select row')}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'status',
      header: t('dataTableStatus', 'Status'),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('status')}</div>
      ),
    },
    {
      accessorKey: 'email',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {t('dataTableEmail', 'Email')}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
    },
    {
      accessorKey: 'amount',
      header: () => <div className="text-right">{t('dataTableAmount', 'Amount')}</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue('amount'));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">{t('dataTableOpenMenu', 'Open menu')}</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('dataTableActions', 'Actions')}</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                {t('dataTableCopyPaymentId', 'Copy payment ID')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t('dataTableViewCustomer', 'View customer')}</DropdownMenuItem>
              <DropdownMenuItem>{t('dataTableViewPaymentDetails', 'View payment details')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
}

// Legacy export for backward compatibility
export const columns: ColumnDef<Payment>[] = createColumns((key, fallback) => fallback || key);

const demoData: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reoja',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
];

// ============================================================================
// Component
// ============================================================================

function DataTable<TData, TValue>({
  columns,
  data,
  classNames,
  className,
  translations,
}: DataTableProps<TData, TValue>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DataTable;

  // L1: 功能层（静态）
  const base = dataTableBase();

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(
    () => ({
      root: toClassString(themeConfig?.slots?.root),
      header: toClassString(themeConfig?.slots?.header),
      filterInput: toClassString(themeConfig?.slots?.filterInput),
      columnToggle: toClassString(themeConfig?.slots?.columnToggle),
      tableContainer: toClassString(themeConfig?.slots?.tableContainer),
      footer: toClassString(themeConfig?.slots?.footer),
      paginationInfo: toClassString(themeConfig?.slots?.paginationInfo),
      paginationButtons: toClassString(themeConfig?.slots?.paginationButtons),
    }),
    [themeConfig]
  );

  // Table state
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  // Format rows selected message with template
  const selectedCount = table.getFilteredSelectedRowModel().rows.length;
  const totalCount = table.getFilteredRowModel().rows.length;
  const rowsSelectedText = translations?.rowsSelectedTemplate
    ? translations.rowsSelectedTemplate
        .replace('{selected}', String(selectedCount))
        .replace('{total}', String(totalCount))
    : `${selectedCount} of ${totalCount} row(s) selected.`;

  return (
    <div className={twMerge(base.root(), themeStyles.root, classNames?.root, className)}>
      <div className={twMerge(base.header(), themeStyles.header, classNames?.header)}>
        <Input
          placeholder={translations?.filterPlaceholder || 'Filter emails...'}
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className={twMerge(base.filterInput(), themeStyles.filterInput, classNames?.filterInput)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={twMerge(base.columnToggle(), themeStyles.columnToggle, classNames?.columnToggle)}
            >
              {translations?.columnsLabel || 'Columns'} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className={twMerge(base.tableContainer(), themeStyles.tableContainer, classNames?.tableContainer)}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {translations?.noResults || 'No results.'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className={twMerge(base.footer(), themeStyles.footer, classNames?.footer)}>
        <div className={twMerge(base.paginationInfo(), themeStyles.paginationInfo, classNames?.paginationInfo)}>
          {rowsSelectedText}
        </div>
        <div className={twMerge(base.paginationButtons(), themeStyles.paginationButtons, classNames?.paginationButtons)}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {translations?.previous || 'Previous'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {translations?.next || 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Demo
// ============================================================================

function DataTableDemo() {
  const { t } = useI18n();

  // Create columns with translations
  const localizedColumns = React.useMemo(() => createColumns(t), [t]);

  // Prepare translations for DataTable UI
  const translations = React.useMemo(
    () => ({
      filterPlaceholder: t('dataTableFilterEmails', 'Filter emails...'),
      columnsLabel: t('dataTableColumns', 'Columns'),
      noResults: t('dataTableNoResults', 'No results.'),
      previous: t('dataTablePrevious', 'Previous'),
      next: t('dataTableNext', 'Next'),
      rowsSelectedTemplate: t('dataTableRowsSelected', '{selected} of {total} row(s) selected.'),
    }),
    [t]
  );

  return (
    <div className="w-full p-4">
      <DataTable columns={localizedColumns} data={demoData} translations={translations} />
    </div>
  );
}

export { DataTable, DataTableDemo };
