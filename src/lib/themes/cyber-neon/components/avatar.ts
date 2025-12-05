/**
 * Avatar Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Avatar"
 * - Shape: Full radius (circle)
 * - Border: Outer glow ring
 * - Online status: Green neon glow dot
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const avatarConfig = {
  slots: {
    /**
     * base: 头像容器基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 外圈发光环
     */
    base: [
      'relative flex shrink-0 overflow-hidden',
      'rounded-full',
      'border-2 border-primary',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
    ],
  },
  variants: {
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['size-10'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['size-8'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['size-14'],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: ['size-20'],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};

export const avatarFallbackConfig = {
  slots: {
    /**
     * base: 头像回退基础样式
     */
    base: [
      'flex h-full w-full items-center justify-center',
      'rounded-full bg-surface-2',
      'text-foreground',
      'font-medium',
    ],
  },
  variants: {
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['text-sm'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['text-xs'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['text-lg'],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: ['text-xl'],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
