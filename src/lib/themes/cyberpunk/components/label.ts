/**
 * Label 组件样式 - Cyberpunk (Field Tag)
 */
export const labelConfig = {
  slots: {
    base: [ // Changed from root to base
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      'font-mono text-primary/80 uppercase tracking-widest text-[10px]',
      // Decorative indicator
      'flex items-center gap-2',
      'before:h-1 before:w-1 before:bg-primary before:block',
    ],
  },
};
