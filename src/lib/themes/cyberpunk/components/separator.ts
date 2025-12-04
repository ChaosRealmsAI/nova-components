/**
 * Separator 组件样式 - Cyberpunk (Divider)
 */
export const separatorConfig = {
  slots: {
    base: [ // Changed from root to base
      'shrink-0 bg-border',
      'relative overflow-visible',
      
      // Glowing line
      'after:absolute after:bg-primary after:shadow-[0_0_10px_var(--primary)]',
    ],
  },
  
  variants: {
    orientation: {
      horizontal: {
        base: [
          'h-[1px] w-full',
          // Accent in the middle
          'after:top-[-1px] after:left-[40%] after:w-[20%] after:h-[3px]',
        ],
      },
      vertical: {
        base: [
          'h-full w-[1px]',
          // Accent in the middle
          'after:left-[-1px] after:top-[40%] after:h-[20%] after:w-[3px]',
        ],
      },
    },
  },
};
