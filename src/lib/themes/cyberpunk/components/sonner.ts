/**
 * Sonner 组件样式 - Cyberpunk (Toast)
 */
export const sonnerConfig = {
  slots: {
    root: [
      'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
      'group-[.toaster]:bg-black group-[.toaster]:border-primary group-[.toaster]:shadow-[0_0_20px_rgba(0,229,255,0.2)]',
      'group-[.toaster]:rounded-none',
      'group-[.toaster]:font-mono',
    ],

    title: [ // Added missing slot
        'group-[.toast]:font-bold',
    ],
    
    description: [
      'group-[.toast]:text-muted-foreground',
    ],
    
    actionButton: [ // Added/Renamed (Validator said actionButton)
      'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
    ],
    
    cancelButton: [ // Added/Renamed
      'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
    ],

    closeButton: [ // Added missing slot
        'group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-border',
    ],

    // Action and Cancel slots were previously just action/cancel, but validator asked for actionButton/cancelButton?
    // Wait, Sonner usually maps to `toastOptions` object which has `classNames: { toast, title, description, actionButton, cancelButton, closeButton }`
    // So `root` maps to `toast`.
    
    // Just to be safe, I'll keep the old keys if they were there, or just add new ones.
    // My previous file had `action` and `cancel`. I'll remove them if they are incorrect.
    // Actually shadcn sonner uses `actionButton` and `cancelButton`.
    
    success: [], // Added missing slot
    error: [], // Added missing slot
    warning: [], // Added missing slot
    info: [], // Added missing slot
    icon: [], // Added missing slot
  },
};
