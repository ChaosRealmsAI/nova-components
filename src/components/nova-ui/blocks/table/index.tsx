'use client';

/**
 * Table Block
 * 表格组件
 * 依赖 Atoms: checkbox
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { tableBaseConfig } from './table.config';

export const tableAtoms = ['checkbox'] as const;
export { tableBaseConfig };

const table = tv(tableBaseConfig);

export type TableVariants = VariantProps<typeof table>;
export type TableSlots = keyof typeof tableBaseConfig.slots;
export type TableClassNames = Partial<Record<TableSlots, string>>;

export interface TableDemoProps extends TableVariants {}

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <div className={cn(styles.container(), themeConfig?.slots?.container)}>
      <table
        data-slot="table"
        className={cn(styles.table(), themeConfig?.slots?.table, className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <thead
      data-slot="table-header"
      className={cn(styles.header(), themeConfig?.slots?.header, className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <tbody
      data-slot="table-body"
      className={cn(styles.body(), themeConfig?.slots?.body, className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(styles.footer(), themeConfig?.slots?.footer, className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <tr
      data-slot="table-row"
      className={cn(styles.row(), themeConfig?.slots?.row, className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <th
      data-slot="table-head"
      className={cn(styles.head(), themeConfig?.slots?.head, className)}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <td
      data-slot="table-cell"
      className={cn(styles.cell(), themeConfig?.slots?.cell, className)}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Table;
  const styles = table({});
  return (
    <caption
      data-slot="table-caption"
      className={cn(styles.caption(), themeConfig?.slots?.caption, className)}
      {...props}
    />
  );
}

// Demo Component
function TableDemo({}: TableDemoProps) {
  const invoices = [
    { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
    { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
    { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  ];
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.invoice}>
              <TableCell className="font-medium">{inv.invoice}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, TableDemo };
