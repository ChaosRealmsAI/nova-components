/**
 * AspectRatio Base Config - ADR-001 标准 Tailwind 类
 */
export const aspectRatioBaseConfig = {
  slots: {
    // flex-1 确保在 flex 容器中正确扩展宽度
    base: 'relative w-full flex-1 overflow-hidden rounded-md border border-border',
  },
  variants: {
    ratio: {
      '1/1': { base: '' }, // Square
      '16/9': { base: '' }, // Widescreen
      '4/3': { base: '' }, // Standard
      '21/9': { base: '' }, // Ultra-wide
    },
  },
  defaultVariants: {
    ratio: '16/9',
  },
} as const;
