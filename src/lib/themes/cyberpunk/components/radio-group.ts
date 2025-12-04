/**
 * RadioGroup 组件样式 - Cyberpunk (Option Select)
 */
export const radioGroupConfig = {
  slots: {
    base: [ // Changed from root to base
      'grid gap-2',
    ],
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [ // Changed from root to base
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'rounded-none rotate-45', // Diamond shape
      'shadow-[0_0_5px_rgba(0,229,255,0.3)]',
    ],
    
    indicator: [
      'flex items-center justify-center',
    ],
    
    icon: [ // Renamed from indicatorIcon to icon
      'h-2.5 w-2.5 fill-current text-current',
      'bg-primary block', // Solid square fill
    ],
  },
};
