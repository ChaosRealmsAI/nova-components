/**
 * Kbd Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Key"
 * - Shape: 8px rounded corners (like real keys)
 * - Shadow: Raised neumorphic effect (physical button feel)
 * - No border: Pure shadow-based depth
 * - Typography: Monospace for key labels
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const kbdConfig = {
  slots: {
    /**
     * base: 键盘按键基础样式
     * ─────────────────────────────────────────────────────────────────────
     * - 8px rounded corners
     * - Small raised shadow (like real keyboard key)
     * - bg-surface-1 (same as background)
     * - Monospace font
     * - 200ms transition
     */
    base: [
      'pointer-events-none inline-flex h-5 select-none items-center gap-1',
      'rounded-lg',
      'bg-surface-1 px-1.5',
      'font-mono text-[10px] font-medium',
      'text-foreground',
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'transition-all duration-200',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
      },

      /**
       * outline: 轮廓样式
       * ─────────────────────────────────────────────────────────────────────
       * Flat variant with minimal shadow
       */
      outline: {
        base: [
          'shadow-[1px_1px_2px_var(--shadow-dark),-1px_-1px_2px_var(--shadow-light)]',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-4 px-1 text-[9px]',
          'rounded-md',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-6 px-2 text-xs',
          'rounded-xl',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
