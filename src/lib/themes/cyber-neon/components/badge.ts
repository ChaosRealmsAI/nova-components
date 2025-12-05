/**
 * Badge Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Tag"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Shadow: Subtle neon glow
 * - Hover: Glow intensify
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const badgeConfig = {
  slots: {
    /**
     * base: 徽章基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 4px 小圆角、霓虹发光边框、轻微发光
     */
    base: [
      'inline-flex items-center',
      'rounded-[4px]',
      'px-2.5 py-0.5',
      'text-xs font-medium',
      'border border-primary',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'transition-all duration-150 ease-out',
      'hover:shadow-[0_0_6px_color-mix(in_srgb,var(--primary)_50%,transparent)]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认徽章 - 霓虹粉
       */
      default: {
        base: [
          'bg-primary/20 text-primary',
          'border-primary',
        ],
      },

      /**
       * secondary: 次要徽章 - 霓虹青
       */
      secondary: {
        base: [
          'bg-secondary/20 text-secondary',
          'border-secondary',
          'shadow-[0_0_4px_color-mix(in_srgb,var(--secondary)_30%,transparent)]',
          'hover:shadow-[0_0_6px_color-mix(in_srgb,var(--secondary)_50%,transparent)]',
        ],
      },

      /**
       * destructive: 危险徽章 - 霓虹红
       */
      destructive: {
        base: [
          'bg-destructive/20 text-destructive',
          'border-destructive',
          'shadow-[0_0_4px_color-mix(in_srgb,var(--destructive)_30%,transparent)]',
          'hover:shadow-[0_0_6px_color-mix(in_srgb,var(--destructive)_50%,transparent)]',
        ],
      },

      /**
       * outline: 轮廓徽章 - 透明背景
       */
      outline: {
        base: [
          'bg-transparent text-foreground',
          'border-border',
          'shadow-[0_0_2px_color-mix(in_srgb,var(--border)_20%,transparent)]',
          'hover:border-border-vivid',
          'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--border)_30%,transparent)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
