/**
 * Aspect Ratio 组件样式
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ 核心：Slot 级别的主题定制，不是简单换色
 * ═══════════════════════════════════════════════════════════════════════════════
 */
/**
 * AspectRatio Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Aspect Ratio Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (2px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const aspectRatioConfig = {
  slots: {
    base: [
      'relative w-full',
      'rounded-none',
      'border-2 border-black',
      'bg-white',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      'overflow-hidden',
    ],
  },

  variants: {
    ratio: {
      '1/1': {
        base: [],
      },
      '16/9': {
        base: [],
      },
      '4/3': {
        base: [],
      },
      '21/9': {
        base: [],
      },
    },
  },
};
