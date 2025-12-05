/**
 * Table Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Data Grid"
 * - Shape: No radius (sharp corners)
 * - Border: 1px bottom border with glow
 * - Header: bg-surface-1 with uppercase text
 * - Row Hover: Background highlight + glow border
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tableConfig = {
  slots: {
    /**
     * container: 表格容器
     */
    container: [
      'relative w-full overflow-auto',
    ],

    /**
     * table: 表格元素
     */
    table: [
      'w-full caption-bottom text-sm',
    ],

    /**
     * header: 表头
     * ─────────────────────────────────────────────────────────────────────
     * 背景为 surface-1，底边框发光
     */
    header: [
      '[&_tr]:border-b border-primary/30',
      'bg-surface-1',
      '[&_tr]:shadow-[0_1px_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
    ],

    /**
     * body: 表体
     */
    body: [
      '[&_tr:last-child]:border-0',
    ],

    /**
     * footer: 表尾
     */
    footer: [
      'border-t border-primary/30',
      'shadow-[0_-1px_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'bg-surface-1',
      'font-medium',
    ],

    /**
     * row: 行
     * ─────────────────────────────────────────────────────────────────────
     * hover 时背景高亮 + 发光边框
     */
    row: [
      'border-b border-border',
      'transition-all duration-150',
      'hover:bg-surface-1',
      'hover:border-primary/50',
      'hover:shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_15%,transparent)]',
      'data-[state=selected]:bg-surface-1',
      'data-[state=selected]:border-primary',
      'data-[state=selected]:shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_25%,transparent)]',
    ],

    /**
     * head: 表头单元格
     * ─────────────────────────────────────────────────────────────────────
     * 大写字母 + 加宽字距
     */
    head: [
      'h-12 px-4 text-left align-middle',
      'font-semibold text-foreground',
      'uppercase tracking-[0.05em]',
      '[&:has([role=checkbox])]:pr-0',
    ],

    /**
     * cell: 单元格
     */
    cell: [
      'p-4 align-middle',
      '[&:has([role=checkbox])]:pr-0',
    ],

    /**
     * caption: 表格说明
     */
    caption: [
      'mt-4 text-sm text-muted-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认表格
       */
      default: {
        container: [],
        table: [],
        header: [],
        body: [],
        footer: [],
        row: [],
        head: [],
        cell: [],
        caption: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
