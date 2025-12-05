/**
 * Spinner Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Loading Ring"
 * - Color: Neon color rotating ring
 * - Glow: Drop shadow glow effect
 * - Animation: Spin animation
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const spinnerConfig = {
  slots: {
    /**
     * base: 加载指示器基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 霓虹色旋转光环 + 发光效果
     */
    base: [
      // Animation
      'animate-spin',

      // Color
      'text-primary',

      // Neon glow effect
      'drop-shadow-[0_0_6px_var(--primary)]',
      'drop-shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_50%,transparent)]',
    ],
  },

  variants: {
    variant: {
      /**
       * default: 默认加载器 - primary color
       */
      default: {
        base: [
          'text-primary',
          'drop-shadow-[0_0_6px_var(--primary)]',
        ],
      },

      /**
       * secondary: 次要加载器 - secondary color
       */
      secondary: {
        base: [
          'text-secondary',
          'drop-shadow-[0_0_6px_var(--secondary)]',
          'drop-shadow-[0_0_12px_color-mix(in_srgb,var(--secondary)_50%,transparent)]',
        ],
      },

      /**
       * muted: 柔和加载器 - muted color, no glow
       */
      muted: {
        base: [
          'text-muted-foreground',
          'drop-shadow-none',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['size-6'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'size-4',
          // 小尺寸发光稍弱
          'drop-shadow-[0_0_4px_var(--primary)]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'size-8',
          // 大尺寸发光增强
          'drop-shadow-[0_0_8px_var(--primary)]',
        ],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: [
          'size-12',
          // 超大尺寸发光最强
          'drop-shadow-[0_0_10px_var(--primary)]',
          'drop-shadow-[0_0_20px_color-mix(in_srgb,var(--primary)_60%,transparent)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
