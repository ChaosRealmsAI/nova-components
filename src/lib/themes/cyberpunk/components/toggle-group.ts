/**
 * ToggleGroup 组件样式 - Cyberpunk (Multi-State Switch)
 */
export const toggleGroupConfig = {
  slots: {
    root: [
      'flex items-center justify-center gap-1',
      'bg-black/50 border border-primary/20 p-1',
    ],
    
    item: [
      // Inherits Toggle styles
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
    ],
  },
};