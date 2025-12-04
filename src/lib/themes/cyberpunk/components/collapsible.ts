/**
 * Collapsible 组件样式 - Cyberpunk (Hidden Section)
 */
export const collapsibleConfig = {
  slots: {
    base: [], // Changed from root to base
    
    trigger: [
      // Generally handled by user, but we can add defaults if needed
    ],
    
    content: [
      'overflow-hidden',
      'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
    ],
  },
};
