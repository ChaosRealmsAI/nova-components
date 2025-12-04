/**
 * Aspect Ratio - Shadcn Default Theme
 */
export const aspectRatioConfig = {
  slots: {
    base: [
      'rounded-md',
      'border',
      'border-border',
    ],
  },
  variants: {
    ratio: {
      '1/1': { base: [] },
      '16/9': { base: [] },
      '4/3': { base: [] },
      '21/9': { base: [] },
    },
  },
};
