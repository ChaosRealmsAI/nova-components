/**
 * Textarea 组件样式 - Cyberpunk (Data Log)
 */
export const textareaConfig = {
  slots: {
    base: [ // Changed from root to base
      'flex min-h-[80px] w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'bg-black border-primary/30 text-primary font-mono',
      'focus-visible:border-primary focus-visible:shadow-[0_0_15px_rgba(0,229,255,0.2)]',
      
      // Corner accent via background image gradient
      'bg-[linear-gradient(135deg,var(--primary)_10px,transparent_0)] bg-no-repeat bg-[length:20px_20px] bg-[position:top_left]',
    ],
  },
};
