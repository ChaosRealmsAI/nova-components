/**
 * Form 组件样式 - Cyberpunk (Input Layout)
 */
export const formConfig = {
  slots: {
    root: [], // Added missing slot

    item: [
      'space-y-2',
    ],
    
    label: [
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      'font-mono text-primary uppercase text-xs tracking-wide',
    ],
    
    control: [],
    
    description: [
      'text-sm text-muted-foreground',
      'font-mono text-xs opacity-70',
    ],
    
    message: [
      'text-sm font-medium text-destructive',
      'font-mono text-xs animate-pulse',
    ],
  },
};
