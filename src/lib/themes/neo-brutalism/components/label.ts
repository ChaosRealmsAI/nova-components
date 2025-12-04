/**
 * Label 组件样式
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ 核心：Slot 级别的主题定制，不是简单换色
 * ═══════════════════════════════════════════════════════════════════════════════
 */
export const labelConfig = {
  slots: {
    /**
     * base: 标签基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 自由发挥：
     * - 字体样式 (font-medium)
     * - 间距 (gap-2)
     * - 颜色 (text-foreground)
     */
    base: 'font-medium gap-2 text-[length:var(--text-sm)]',
  },
  variants: {
    variant: {
      default: {
        base: 'text-foreground',
      },
      muted: {
        base: 'text-muted-foreground',
      },
      error: {
        base: 'text-destructive',
      },
    },
    size: {
      default: {
        base: [],
      },
      sm: {
        base: ['text-[length:var(--text-xs)]'],
      },
      lg: {
        base: ['text-[length:var(--text-base)]'],
      },
    },
  },
} as const;