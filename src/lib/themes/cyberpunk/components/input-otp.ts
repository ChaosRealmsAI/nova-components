/**
 * InputOtp 组件样式 - Cyberpunk (Code Entry)
 *
 * Design Concept: "Digital Access Code"
 * - Sharp corners, neon glow on focus
 * - Monospace font for technical look
 */
export const inputOtpConfig = {
  slots: {
    root: [
      'flex items-center gap-2',
    ],

    container: [
      'flex items-center gap-2',
    ],

    group: [
      'flex items-center',
    ],

    slot: [
      'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      'rounded-none border-primary/30 bg-black text-primary font-mono text-lg',
      'first:rounded-none last:rounded-none',
      'hover:bg-primary/10',
      'data-[active=true]:z-10 data-[active=true]:ring-2 data-[active=true]:ring-ring data-[active=true]:ring-offset-background',
      'data-[active=true]:border-primary data-[active=true]:shadow-[0_0_10px_rgba(0,229,255,0.5)]',
    ],

    separator: [
      'text-primary',
    ],

    caret: [
      'flex items-center justify-center',
    ],

    caretLine: [
      'h-4 w-px bg-primary animate-caret-blink',
    ],
  },
  variants: {
    variant: {
      default: {
        root: [],
        container: [],
        group: [],
        slot: [],
        separator: [],
        caret: [],
        caretLine: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
