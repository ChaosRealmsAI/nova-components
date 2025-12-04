/**
 * Spinner 组件样式 - Cyberpunk (Loading)
 */
export const spinnerConfig = {
  slots: {
    base: [ // Changed from root to base
      'animate-spin text-primary',
    ],
  },
  
  variants: {
    size: {
      default: { base: ['h-4 w-4'] },
      sm: { base: ['h-3 w-3'] },
      lg: { base: ['h-6 w-6'] },
      icon: { base: ['h-10 w-10'] },
    },
  },
};
