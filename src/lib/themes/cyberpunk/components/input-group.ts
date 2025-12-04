/**
 * InputGroup 组件样式 - Cyberpunk (Merged Inputs)
 */
export const inputGroupConfig = {
  slots: {
    root: [
      'flex w-full items-center',
      // Add tech border container
      'relative',
    ],
    
    addon: [
      'flex h-10 items-center border border-input bg-muted px-3 text-sm text-muted-foreground',
      'border-primary/30 bg-primary/10 text-primary font-mono',
      'first:rounded-l-none last:rounded-r-none', // Ensure sharp
      'border-r-0', // Merge
    ],
    
    input: [
      // Inherits input styles, just ensuring no rounding overlap
      'flex-1 rounded-none first:rounded-l-none last:rounded-r-none',
    ],

    button: [ // Added missing slot
        // Reuse button styles but ensure merged look
        'rounded-none first:rounded-l-none last:rounded-r-none',
    ]
  },
};
