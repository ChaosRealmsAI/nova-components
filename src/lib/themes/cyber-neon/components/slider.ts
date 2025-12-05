/**
 * Slider Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Slider"
 * - Shape: Full radius (pill) for track, circle for thumb
 * - Track: bg-surface-2
 * - Range: bg-primary with glow
 * - Thumb: Neon glow when active
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sliderConfig = {
  slots: {
    /**
     * base: 滑块容器基础样式
     */
    base: [
      'relative flex w-full touch-none select-none items-center',
    ],

    /**
     * track: 滑块轨道
     */
    track: [
      'relative h-2 w-full grow overflow-hidden',
      'rounded-full',
      'bg-surface-2',
    ],

    /**
     * range: 已选择范围
     * ─────────────────────────────────────────────────────────────────────
     * 进度条发光
     */
    range: [
      'absolute h-full',
      'bg-primary',
      'rounded-full',
      'shadow-[0_0_4px_var(--primary)]',
    ],

    /**
     * thumb: 滑块手柄
     * ─────────────────────────────────────────────────────────────────────
     * hover 时发光增强
     */
    thumb: [
      'block h-5 w-5 rounded-full',
      'border-2 border-primary',
      'bg-background',
      'ring-offset-background',
      'transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-40',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'hover:shadow-[0_0_8px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],
  },
  variants: {
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        track: ['h-2'],
        thumb: ['h-5 w-5'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        track: ['h-1'],
        thumb: ['h-4 w-4'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        track: ['h-3'],
        thumb: ['h-6 w-6'],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
