/**
 * Table Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Borderless Neumorphic Table" (无边框新拟物表格)
 * - Shape: Large rounded container (24px)
 * - Border: No borders, rely on shadows for separation
 * - Header: Slight inset effect (凹入)
 * - Rows: Hover with raised effect (凸起)
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tableConfig = {
  slots: {
    /**
     * container: 表格容器 - 圆角凸起容器
     */
    container: [
      'w-full',
      'overflow-hidden',
      // Shape - 大圆角
      'rounded-[24px]',
      // Shadow - 轻微凸起
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      // Background
      'bg-surface-1',
    ],

    /**
     * table: 表格元素
     */
    table: [
      'w-full',
      'caption-bottom',
      'border-collapse',
      'border-spacing-0',
    ],

    /**
     * header: 表头 - 轻微内凹效果
     */
    header: [
      'bg-surface-1',
      // 轻微内凹阴影，体现凹入感
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * body: 表体
     */
    body: [
      'bg-surface-1',
    ],

    /**
     * footer: 表尾 - 类似 header
     */
    footer: [
      'bg-surface-1',
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * row: 行 - hover 凸起效果
     */
    row: [
      // Transition - 柔和过渡
      'transition-all duration-200 ease-in-out',
      // Border - 无边框
      'border-0',
      // Hover - 轻微凸起阴影
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:relative hover:z-10',
      'hover:bg-surface-1-hover',
      // Active
      'data-[state=selected]:bg-surface-2',
      'data-[state=selected]:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
    ],

    /**
     * head: 表头单元格
     */
    head: [
      'h-12 px-6',
      'text-left align-middle',
      'font-medium text-sm text-foreground-secondary',
      // 无边框
      'border-0',
    ],

    /**
     * cell: 单元格
     */
    cell: [
      'px-6 py-4',
      'align-middle',
      'text-sm text-foreground',
      // 无边框
      'border-0',
    ],

    /**
     * caption: 表格说明
     */
    caption: [
      'mt-4 px-6',
      'text-sm text-muted-foreground',
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
