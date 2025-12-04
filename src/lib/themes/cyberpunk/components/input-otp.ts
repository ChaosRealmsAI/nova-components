/**
 * InputOtp 组件样式 - Cyberpunk (Code Entry)
 */
export const inputOtpConfig = {
  slots: {
    root: [
      'flex items-center gap-2',
    ],

    container: [ // Added missing slot
        'flex items-center gap-2',
    ],
    
    group: [
      'flex items-center',
    ],
    
    slot: [
      'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      'rounded-none border-primary/30 bg-black text-primary font-mono text-lg',
      'first:rounded-none last:rounded-none', // Sharp
      'hover:bg-primary/10',
    ],
    
    slotActive: [
      'z-10 ring-2 ring-ring ring-offset-background',
      'border-primary shadow-[0_0_10px_rgba(0,229,255,0.5)]',
    ],
    
    separator: [
      'text-primary',
    ],

    caret: [], // Added missing slot
    caretLine: [], // Added missing slot
  },
};
