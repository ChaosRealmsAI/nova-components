/**
 * Toggle Group Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Toggle Group"
 * - Connected toggles with shared borders
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const toggleGroupConfig = {
  slots: {
    /**
     * root: 切换组根容器
     * ─────────────────────────────────────────────────────────────────────
     * 统一的霓虹边框组
     */
    root: [
      'inline-flex',
      'gap-px',
      'rounded-[4px]',
      'border border-border',
      'p-1',
      'bg-surface-1',
    ],

    /**
     * item: 切换项
     * ─────────────────────────────────────────────────────────────────────
     * 继承 Toggle 样式，但无独立边框
     */
    item: [
      'inline-flex items-center justify-center',
      'rounded-[4px]',
      'border border-transparent',
      'bg-transparent',
      'text-sm font-medium',
      'text-foreground',
      'transition-all duration-150 ease-out',
      'hover:bg-surface-2',
      'hover:text-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-40',
      'data-[state=on]:bg-primary/20',
      'data-[state=on]:border-primary',
      'data-[state=on]:text-primary',
      'data-[state=on]:shadow-[0_0_6px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'hover:data-[state=on]:shadow-[0_0_8px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],
  },

  variants: {
    variant: {
      /**
       * default: 默认切换组
       */
      default: {
        root: [
          // 继承 slots.root 的所有样式
        ],
        item: [
          // 继承 slots.item 的所有样式
        ],
      },

      /**
       * outline: 轮廓切换组
       */
      outline: {
        root: [
          'bg-transparent',
          'border-primary',
          'shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent)]',
        ],
        item: [
          'data-[state=on]:bg-primary/10',
        ],
      },
    },

    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        root: [
          // 继承 slots.root 的所有样式
        ],
        item: [
          'h-9 px-3',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        root: [
          'p-0.5',
        ],
        item: [
          'h-8 px-2 text-xs',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        root: [
          'p-1.5',
        ],
        item: [
          'h-10 px-4 text-base',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
