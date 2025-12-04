/**
 * AspectRatio 组件样式 - Cyberpunk (Frame)
 */
export const aspectRatioConfig = {
  slots: {
    base: [ // Changed from root to base
      'relative overflow-hidden',
      'border border-primary/20',
      // Corner markers
      'after:absolute after:top-0 after:left-0 after:w-4 after:h-4 after:border-t-2 after:border-l-2 after:border-primary',
      'before:absolute before:bottom-0 before:right-0 before:w-4 before:h-4 before:border-b-2 before:border-r-2 before:border-primary',
    ],
  },
};
