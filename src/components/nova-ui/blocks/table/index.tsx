'use client';

/**
 * Table Block
 *
 * 表格组件，用于展示结构化数据。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: checkbox
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
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import type { MessageKey } from '@/lib/i18n/messages';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const tableAtoms = ['checkbox'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const tableBase = tv({
  slots: {
    container: 'relative w-full overflow-x-auto',
    table: 'w-full caption-bottom text-sm',
    header: '[&_tr]:border-b',
    body: '[&_tr:last-child]:border-0',
    footer: 'border-t font-medium [&>tr]:last:border-b-0',
    row: 'border-b transition-colors data-[state=selected]:bg-muted',
    head: 'h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    cell: 'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    caption: 'mt-4 text-sm',
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

export type TableSlots = keyof ReturnType<typeof tableBase>;
export type TableClassNames = Partial<Record<TableSlots, string>>;

export interface TableProps extends React.ComponentProps<'table'> {
  classNames?: TableClassNames;
}

// ============================================================================
// Components
// ============================================================================

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, classNames, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层（静态）
    const base = tableBase();

    // L2: 主题层（useMemo 缓存）
    const themeStyles = React.useMemo(
      () => ({
        container: toClassString(themeConfig?.slots?.container),
        table: toClassString(themeConfig?.slots?.table),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const containerClass = twMerge(base.container(), themeStyles.container, classNames?.container);
    const tableClass = twMerge(base.table(), themeStyles.table, className);

    return (
      <div className={containerClass}>
        <table ref={ref} data-slot="table" className={tableClass} {...props} />
      </div>
    );
  }
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.ComponentProps<'thead'>>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层
    const base = tableBase();

    // L2: 主题层
    const themeStyles = React.useMemo(
      () => ({
        header: toClassString(themeConfig?.slots?.header),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const headerClass = twMerge(base.header(), themeStyles.header, className);

    return <thead ref={ref} data-slot="table-header" className={headerClass} {...props} />;
  }
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, React.ComponentProps<'tbody'>>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层
    const base = tableBase();

    // L2: 主题层
    const themeStyles = React.useMemo(
      () => ({
        body: toClassString(themeConfig?.slots?.body),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const bodyClass = twMerge(base.body(), themeStyles.body, className);

    return <tbody ref={ref} data-slot="table-body" className={bodyClass} {...props} />;
  }
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.ComponentProps<'tfoot'>>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层
    const base = tableBase();

    // L2: 主题层
    const themeStyles = React.useMemo(
      () => ({
        footer: toClassString(themeConfig?.slots?.footer),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const footerClass = twMerge(base.footer(), themeStyles.footer, className);

    return <tfoot ref={ref} data-slot="table-footer" className={footerClass} {...props} />;
  }
);
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.ComponentProps<'tr'>>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层
    const base = tableBase();

    // L2: 主题层
    const themeStyles = React.useMemo(
      () => ({
        row: toClassString(themeConfig?.slots?.row),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const rowClass = twMerge(base.row(), themeStyles.row, className);

    return <tr ref={ref} data-slot="table-row" className={rowClass} {...props} />;
  }
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, React.ComponentProps<'th'>>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层
    const base = tableBase();

    // L2: 主题层
    const themeStyles = React.useMemo(
      () => ({
        head: toClassString(themeConfig?.slots?.head),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const headClass = twMerge(base.head(), themeStyles.head, className);

    return <th ref={ref} data-slot="table-head" className={headClass} {...props} />;
  }
);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, React.ComponentProps<'td'>>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层
    const base = tableBase();

    // L2: 主题层
    const themeStyles = React.useMemo(
      () => ({
        cell: toClassString(themeConfig?.slots?.cell),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const cellClass = twMerge(base.cell(), themeStyles.cell, className);

    return <td ref={ref} data-slot="table-cell" className={cellClass} {...props} />;
  }
);
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.ComponentProps<'caption'>>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Table;

    // L1: 功能层
    const base = tableBase();

    // L2: 主题层
    const themeStyles = React.useMemo(
      () => ({
        caption: toClassString(themeConfig?.slots?.caption),
      }),
      [themeConfig]
    );

    // 合并: L1 + L2 + L3
    const captionClass = twMerge(base.caption(), themeStyles.caption, className);

    return <caption ref={ref} data-slot="table-caption" className={captionClass} {...props} />;
  }
);
TableCaption.displayName = 'TableCaption';

// ============================================================================
// Demo Component
// ============================================================================

export interface TableDemoProps {}

function TableDemo({}: TableDemoProps) {
  const { t } = useI18n();

  const invoices = [
    { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
    { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
    { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  ];

  // 状态和支付方式的国际化映射
  const statusMap: Record<string, MessageKey> = {
    'Paid': 'tableStatusPaid',
    'Pending': 'tableStatusPending',
    'Unpaid': 'tableStatusUnpaid',
  };

  const methodMap: Record<string, MessageKey> = {
    'Credit Card': 'tableMethodCreditCard',
    'PayPal': 'tableMethodPayPal',
    'Bank Transfer': 'tableMethodBankTransfer',
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('tableHeaderInvoice' as MessageKey, 'Invoice')}</TableHead>
            <TableHead>{t('tableHeaderStatus' as MessageKey, 'Status')}</TableHead>
            <TableHead>{t('tableHeaderMethod' as MessageKey, 'Method')}</TableHead>
            <TableHead className="text-right">{t('tableHeaderAmount' as MessageKey, 'Amount')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.invoice}>
              <TableCell className="font-medium">{inv.invoice}</TableCell>
              <TableCell>{t(statusMap[inv.status] as MessageKey, inv.status)}</TableCell>
              <TableCell>{t(methodMap[inv.method] as MessageKey, inv.method)}</TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, TableDemo };
